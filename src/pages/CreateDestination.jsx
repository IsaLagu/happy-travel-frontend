import { useEffect, useState } from "react";
import Input from "../components/general/Input";
import ButtonsForm from "../components/form/ButtonsForm";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { createSchema } from "../hooks/validationSchemas";
import usePost from "../hooks/usePost";
import { useNavigate } from "react-router-dom";

const CreateDestination = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: yupResolver(createSchema),
  });

  const { executePost, data } = usePost("/destinations");
  const navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [formData, setFormData] = useState({title: "", location: "", description: "", imageUrl: null});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    
    const data = new FormData();
    data.append("title", formData.title);
    data.append("location", formData.location);
    data.append("description", formData.description);
    data.append("imageUrl", formData.imageUrl);
  
    console.log(formData);
    //executePost(formData, true); 

    fetch("http://localhost:3001/destinations", {  // Asegúrate de usar el endpoint aquí
      method: "POST",
      body: formData,
      mode:  'no-cors',
      contentType: 'application/json',
      headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhbml0YUBtYWxpdG8uY29tIiwiaWF0IjoxNzI1MDA2MTQ5LCJleHAiOjE3MjUwMDk3NDl9.aPACKsGS2rEnNuOTfUcR4Uc8b_UlbQ81He9MnMlXZSU'
      }
    })
    .then((response) => {
      console.log(response); // Agrega esta línea para ver el contenido del `response`
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((result) => {
      console.log("Success:", result);
      // Maneja la respuesta aquí, si es necesario
    })
    .catch((error) => {
      console.error("Error:", error);
      // Maneja el error aquí, si es necesario
    });


  };

  const onCancel = () => {
    reset();
  };

  useEffect(() => {
    if (data) {
      navigate("/");
    }
  }, [data, navigate]);

  return (
    <div className="flex justify-center items-center mt-12 pt-32">
      <div className="w-[733px] h-[509px] px-[35px] bg-white border-4 border-cream rounded-2xl">
        <form id="form-destination" onSubmit={onSubmitForm} method="post">
          <h5 className="text-2xl text-center pt-[10px] font-bold text-red border-red border-b-2 mb-[22px] pb-2">
            Crear destino
          </h5>
          <div className="flex flex-row gap-10">
            <div className="flex flex-col gap-[30px] items-center">
              <div>
                <label className="block mb-1 text-xl font-semibold text-blue">Título</label>
                <input 
                  value={formData.title}
                  onChange={handleChange}
                  className="w-[300px]" 
                  name="title" placeholder="Escribe tu título" 
                />
                {errors.title && <p className="text-red-500 text-sm">{errors.title.message}</p>}
              </div>
              <div>
                <label htmlFor="location" className="block mb-1 text-xl font-semibold text-blue">
                  Ubicación
                </label>
                <input
                  onChange={handleChange}
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
                    id="imageUrl"
                    name="imageUrl"
                    onChange={handleChange}
                    accept="image/*"  // Muestra el nombre de la imagen seleccionada
                  />
                  <div className="flex w-[300px] cursor-pointer">
                    <div className="h-[40px] w-[62px] rounded-l-full bg-blue flex items-center justify-center">
                      <img className="h-6" src="..\assets\images\File-icon.svg" alt="icon" />
                    </div>
                    <span className="overflow-hidden text-ellipsis h-10 w-[300px] font-light text-xl text-blue bg-cream shadow-inner shadow-slate-400 rounded-r-full border-gray-300 placeholder-blue block pl-[17px] py-2.5">
                      {image || "Sube una imagen ..."}
                    </span>
                  </div>
                  {errors.imageUrl && <p className="text-red-500 text-sm">{errors.imageUrl.message}</p>}
                </div>
              </div>
              <div className="mt-[20px]">
                <button className="bg-green">Aceptar</button>
                <button type="reset" className="bg-red">Cancelar</button>
              </div>
            </div>
            <div className="text-xl font-semibold text-blue mt-[-24px]">
              <div className="flex flex-col gap-[5px] mt-5">
                <label htmlFor="description" className="block text-xl mb-1 font-semibold text-blue">
                  ¿Por qué quieres viajar allí?
                </label>
                <input
                  onChange={handleChange}
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
