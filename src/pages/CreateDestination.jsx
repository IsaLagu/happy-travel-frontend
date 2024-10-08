import { useEffect, useState } from "react";
import Input from "../components/general/Input";
import ButtonsForm from "../components/form/ButtonsForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchema } from "../hooks/validationSchemas";
import usePost from "../hooks/usePost";
import { useNavigate } from "react-router-dom";

const preset_name = "yu1h90st";
const cloud_name = "dtftuh9ky";
const CreateDestination = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(createSchema),
  });

  const { executePost, data } = usePost("/destinations");
  const navigate = useNavigate();
  const [image, setImage] = useState();

  const onSubmit = (formData) => {
    executePost({ ...formData, image: undefined, imageUrl: image });
  };

  const onCancel = () => {
    reset();
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append("file", files[0]);
    data.append("upload_preset", preset_name);

    try {
      const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "POST",
        body: data,
      });

      const file = await response.json();
      setImage(file.secure_url);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  console.log("errors", errors);

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
                <label className="block mb-1 text-xl font-semibold text-blue">Título</label>
                <Input {...register("title")} className="w-[300px]" name="title" placeholder="Escribe tu título" />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>
              <div>
                <label htmlFor="location" className="block mb-1 text-xl font-semibold text-blue">
                  Ubicación
                </label>
                <Input
                  {...register("location")}
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
                    onChange={(e) => uploadImage(e)}
                    className="hidden"
                    accept="image/*"
                  />
                  <div
                    className="flex w-[300px] cursor-pointer"
                    onClick={() => document.getElementById("fileInput").click()}
                  >
                    <div className="h-[40px] w-[62px] rounded-l-full bg-blue flex items-center justify-center">
                      <img className="h-6" src="..\assets\images\File-icon.svg" alt="icon" />
                    </div>
                    <span className="overflow-hidden text-ellipsis h-10 w-[300px] font-light text-xl text-blue bg-cream shadow-inner shadow-slate-400 rounded-r-full border-gray-300 placeholder-blue block pl-[17px] py-2.5">
                      {image ?? "Sube una imagen ..."}
                    </span>
                  </div>
                  {errors.image && <p className="text-red-500 text-sm">{errors.image.message}</p>}
                </div>
              </div>
              <div className="mt-[20px]">
                <ButtonsForm onCancel={onCancel} className="flex justify-center items-center mt-4" />
              </div>
            </div>
            <div className="text-xl font-semibold text-blue mt-[-24px]">
              <div className="flex flex-col gap-[5px] mt-5">
                <label htmlFor="description" className="block text-xl mb-1 font-semibold text-blue">
                  ¿Por qué quieres viajar allí?
                </label>
                <Input
                  {...register("description")}
                  className="w-[300px] h-[372px] rounded-xl"
                  name="description"
                  placeholder="Escribe tus razones..."
                />
                {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateDestination;
