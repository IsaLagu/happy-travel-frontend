import { useEffect } from "react";
import Input from "../components/general/Input";
import ButtonsForm from "../components/form/ButtonsForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../hooks/validationSchemas";
import usePost from "../hooks/usePost";
import useUser from "../hooks/useUser";
import { useNavigate } from "react-router-dom";

const CreateDestination = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(signUpSchema),
    });

    const { error, executePost, data } = usePost("/auth/create-destination")
    const { setToken } = useUser()
    const navigate = useNavigate()

    const onSubmit = (formData) => {
        executePost(formData)
    }

    const onCancel = () => {
        reset()
    }
    useEffect(() => {
        if (data) {
            setToken(data.token)
            navigate("/")
        }

        if (error) {
            alert(`Error: ${error.message || "No se pudo crear el destino"}`);
        }
    }, [data, setToken, navigate])


    return (
        <div className="flex justify-center items-center mt-12 pt-32">
            <div className="w-[733px] h-[509px] px-[35px] bg-white border-4 border-cream rounded-2xl">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <h5 className="text-2xl text-center pt-[10px] font-bold text-red border-red border-b-2 mb-[22px] pb-2">
                        Crear destino
                    </h5>
                    <div className="flex flex-row gap-10">
                        <div className="flex flex-col gap-[30px] items-center">
                            <div>
                                <label className="block mb-1 text-xl font-semibold text-blue">
                                    Título
                                </label>
                                <Input {...register("title")}
                                    className="w-[300px]"
                                    name="title"
                                    placeholder="Escribe tu título"
                                />
                                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-1 text-xl font-semibold text-blue">
                                    Ubicación
                                </label>
                                <Input {...register("location")}
                                    className="w-[300px]"
                                    name="location"
                                    placeholder="Escribe la ubicación"
                                />
                                {errors.location && <p className="text-red-500 text-sm">{errors.location.message}</p>}
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="image" className="block mb-1 text-xl font-semibold text-blue">
                                        Imagen
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type="file"
                                        id="fileInput"
                                        {...register("image")}
                                        className="hidden"
                                        accept="image/*"
                                    />
                                    <div
                                        className="flex w-[300px] cursor-pointer"
                                        onClick={() => document.getElementById('fileInput').click()} >
                                        <div className="h-[40px] w-[62px] rounded-l-full bg-blue flex items-center justify-center">
                                            <img className="h-6" src="..\assets\images\File-icon.svg" alt="icon" />
                                        </div>
                                        <span className=" h-10 w-[300px] font-light text-xl text-blue bg-cream shadow-inner shadow-slate-400 rounded-r-full border-gray-300 placeholder-blue block pl-[17px] py-2.5">Sube una imagen ...</span>
                                    </div>
                                    {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                                </div>
                            </div>
                            <div className="mt-[20px]">
                                <ButtonsForm onSubmit={handleSubmit(onSubmit)} onCancel={onCancel} className="flex justify-center items-center mt-4" />
                            </div>
                        </div>
                        <div className="text-xl font-semibold text-blue mt-[-24px]">
                            <div className="flex flex-col gap-[5px] mt-5">
                                <label htmlFor="why" className="block text-xl mb-1 font-semibold text-blue">
                                    ¿Por qué quieres viajar allí?
                                </label>
                                <Input
<<<<<<< Updated upstream
                                    value={why}
                                    onChange={(e) => setWhy(e.target.value)}
                                    className="w-[300px] h-[372px] rounded-[6px]"
=======
                                    {...register("why")}
                                    className="w-[300px] h-[372px] rounded-xl"
>>>>>>> Stashed changes
                                    name="why"
                                    placeholder="Escribe tus razones..."
                                />
                                {errors.why && <p className="text-red-500 text-sm">{errors.why.message}</p>}
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default CreateDestination;
