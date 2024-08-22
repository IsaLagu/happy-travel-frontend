import Input from "../general/Input";

const SignUp = () => {
  return (
    <div className="flex justify-center mt-20">
      <div className="w-[370px] h-[487px] px-[35px] bg-white border-4 border-cream rounded-2xl">
        <form action="#">
          <h5 className="text-2xl text-center pt-[10px] font-bold text-red border-red border-b-2 mb-[22px]">
            Registro de usuario
          </h5>
          <div className="flex flex-col gap-[35px]">
            <div>
              <label htmlFor="name" className="block mb-2 text-xl font-semibold text-blue">
                Nombre
              </label>
              <Input className="w-full" name="name" placeholder="Escribe tu nombre" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-xl font-semibold text-blue">
                E-Mail
              </label>
              <Input className="w-full" name="email" placeholder="Escribe tu email" />
            </div>
            <div>
              <label htmlFor="password" className="block mb-2 text-xl font-semibold text-blue">
                Contraseña
              </label>
              <Input className="w-full" name="password" placeholder="Escribe tu contaseña" />
            </div>
            <div className="text-xl font-semibold text-blue text-center">
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
