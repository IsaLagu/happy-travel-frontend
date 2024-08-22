import Input from "../general/Input";

const SignUp = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-full max-w-sm font-jaldi p-4 bg-white border-4 border-cream rounded-lg">
        <form className="space-y-6" action="#">
          <h5 className="text-xl text-center pb-2 font-bold text-red border-red border-b-2 ">Registro de usuario</h5>
          <div>
            <label htmlFor="name" className="block mb-2 text-base font-bold text-blue">
              Nombre
            </label>
            <Input text="nombre" placeholder="Escribe tu nombre" />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-base font-bold text-blue">
              E-mail
            </label>
            <Input text="email" placeholder="Escribe tu email" />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-base font-bold text-blue">
              Contraseña
            </label>
            <Input text="contraseña" placeholder="Escribe tu contaseña" />
          </div>
          <div className="text-base font-bold text-blue text-center">
            ¿Ya tienes cuenta? Accede {""}
            <a href="#" className="text-green font-bold hover:underline">
              aquí
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
