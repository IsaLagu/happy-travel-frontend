import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../components/general/Input";
import Button from "../components/general/Button";
import { loginSchema } from "../hooks/validationSchemas";
import useUser from "../hooks/useUser";
import usePost from "../hooks/usePost";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const { error, executePost, data } = usePost("/auth/login");
  const { setToken } = useUser();
  const navigate = useNavigate();

  const onSubmit = (formData) => {
    executePost(formData);
  };

  useEffect(() => {
    if (data) {
      setToken(data.token);
      navigate("/");
    }
  }, [data, setToken, navigate]);

  return (
    <div className="flex justify-center mt-12 p-36">
      <div className="w-[370px] h-[385px] px-[35px] bg-white border-4 border-cream rounded-2xl">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h5 className="text-2xl text-center pt-[10px] font-bold text-red border-red border-b-2 mb-[22px] pb-2">
            Acceso de usuario
          </h5>
          <div className="flex flex-col gap-[30px]">
            <div>
              <label htmlFor="email" className="block mb-1 text-xl font-semibold text-blue">
                E-Mail
              </label>
              <Input {...register("email")} className="w-full" placeholder="Escribe tu email" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-1 text-xl font-semibold text-blue">
                Contraseña
              </label>
              <Input type="password" {...register("password")} className="w-full" placeholder="Escribe tu contraseña" />
              {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
            </div>
            {error && (
              <div className="p-1 m-[-25px] text-sm text-center text-red rounded-lg" role="alert">
                <span className="font-medium">Hubo un error:</span> {error}
              </div>
            )}
            <div className="flex flex-wrap gap-4 justify-center">
              <Button type="submit" buttonStyle="bg-green" buttonText="Aceptar" />
              <Button type="button" buttonStyle="bg-red" buttonText="Cancelar" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
