import { useState } from "react";
import Input from "../components/general/Input";
import ButtonsForm from "../components/form/ButtonsForm";

const EditDestination = () => {
    const [title, setTitle] = useState("");
    const [location, setLocation] = useState("");
    const [image, setImage] = useState("");
    const [why, setWhy] = useState("");
    const handleSubmit = (e) => {
        e.preventDefault();
        const user = { title, location, image, why };
        console.log(user);
    };

    return (
        <div className="flex justify-center items-center mt-12 pt-32">
            <div className="w-[733px] h-[509px] px-[35px] bg-white border-4 border-cream rounded-2xl">
                <form action="#">
                    <h5 className="text-2xl text-center pt-[10px] font-bold text-red border-red border-b-2 mb-[22px] pb-2">
                        Editar destino
                    </h5>
                    <div className="flex flex-row gap-10">
                        <div className="flex flex-col gap-[30px] items-center">
                            <div>
                                <label htmlFor="title" className="block mb-1 text-xl font-semibold text-blue">
                                    Título
                                </label>
                                <Input
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                    className="w-[300px]"
                                    name="title"
                                    placeholder="Escribe tu título"
                                    required="required"
                                />
                            </div>
                            <div>
                                <label htmlFor="location" className="block mb-1 text-xl font-semibold text-blue">
                                    Ubicación
                                </label>
                                <Input
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    className="w-[300px]"
                                    name="location"
                                    placeholder="Escribe la ubicación"
                                    required="required"
                                />
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="image" className="block mb-1 text-xl font-semibold text-blue">
                                        Imagen
                                    </label>
                                </div>
                                <div className="relative">
                                    <Input
                                        value={image}
                                        onChange={(e) => setImage(e.target.value)}
                                        className="w-[300px]"
                                        name="image"
                                        placeholder="             Sube tu imagen"
                                    />
                                    <div className="absolute h-[40px] w-[62px] rounded-l-full bg-blue inset-y-0 flex items-center justify-center">
                                        <img className="h-6" src="..\assets\images\File-icon.svg" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-[50px]">
                                <ButtonsForm className="flex justify-center items-center mt-4" />
                            </div>
                        </div>
                        <div className="text-xl font-semibold text-blue mt-[-24px]">
                            <div className="flex flex-col gap-[5px] mt-5">
                                <label htmlFor="why" className="block text-xl mb-1 font-semibold text-blue">
                                    ¿Por qué quieres viajar allí?
                                </label>
                                <Input
                                    value={why}
                                    onChange={(e) => setWhy(e.target.value)}
                                    className="w-[300px] h-[372px] rounded-[4px]"
                                    name="why"
                                    placeholder="Escribe tus razones..."
                                    required="required"
                                />
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditDestination;
