import { useEffect, useState } from "react";
import Input from "../components/general/Input";
import Button from "../components/general/Button";
import usePost from "../hooks/usePost";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { error, executePost, data } = usePost("/auth/register");

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = { name, email, password };
    console.log(user);
    executePost({ name, email, password });
  };

  useEffect(() => {
    console.log("Data", data);
  }, [data]);

  return (
    <div className="flex justify-center mt-12">
      <div className="w-[370px] h-[487px] px-[35px] bg-white border-4 border-cream rounded-2xl">
        <form>
          <h5 className="text-2xl text-center pt-[10px] font-bold text-red border-red border-b-2 mb-[22px] pb-2">
            Registro de usuario
          </h5>
          <div className="flex flex-col gap-[30px]">
            <div>
              <label htmlFor="name" className="block mb-1 text-xl font-semibold text-blue">
                Nombre
              </label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full"
                name="name"
                placeholder="Escribe tu nombre"
                required="required"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-xl font-semibold text-blue">
                E-Mail
              </label>
              <Input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full"
                name="email"
                placeholder="Escribe tu email"
                required="required"
              />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-xl font-semibold text-blue">
                Contraseña
              </label>
              <Input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full"
                name="password"
                placeholder="Escribe tu contaseña"
              />
            </div>
            {error && (
              <div class="p-1 m-[-25px] text-sm text-center text-red rounded-lg" role="alert">
                <span class="font-medium">There was an error:</span> {error}
              </div>
            )}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button onClick={handleSubmit} buttonStyle="bg-green" buttonText="Aceptar" />
              <Button onClick={() => undefined} buttonStyle="bg-red" buttonText="Cancelar" />
            </div>
            <div className="text-xl font-semibold text-blue text-center mt-[-20px]">
              ¿Ya tienes cuenta? Accede {""}
              <a href="#" className="text-green font-semibold hover:underline">
                aquí
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
