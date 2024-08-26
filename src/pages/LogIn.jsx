import Input from "../components/general/Input";
import Button from "../components/general/Button";

const LogIn = () => {
  return (
    <div className="flex justify-center mt-12">
      <div className="w-[370px] h-[385px] px-[35px] bg-white border-4 border-cream rounded-2xl">
        <form>
          <h5 className="text-2xl text-center pt-[10px] font-bold text-red border-red border-b-2 mb-[22px] pb-2">
            Acceso de usuario
          </h5>
          <div className="flex flex-col gap-[30px]">
            <div>
              <label htmlFor="email" className="block mb-1 text-xl font-semibold text-blue">
                E-Mail
              </label>
              <Input className="w-full" name="email" placeholder="Escribe tu email" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-xl font-semibold text-blue">
                Contraseña
              </label>
              <Input type="password" className="w-full" name="password" placeholder="Escribe tu contraseña" />
            </div>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button type="submit" buttonStyle="bg-green" buttonText="Aceptar" />
              <Button type="button" buttonStyle="bg-red" buttonText="Cancelar" />
            </div>
            <div className="text-xl font-semibold text-blue text-center mt-[-20px]">
              ¿Ya tienes cuenta? Accede{" "}
              <a href="/login" className="text-green font-semibold hover:underline">
                aquí
              </a>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
