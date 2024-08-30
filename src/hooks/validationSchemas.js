// src/hooks/validationSchemas.js
import * as yup from "yup";

export const signUpSchema = yup.object().shape({
  name: yup.string().required("El campo nombre es obligatorio"),
  email: yup.string().email("El formato email es invalido").required("El campo email es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caractéres"),
});

export const createSchema = yup.object().shape({
  title: yup.string().required("Este campo es obligatorio"),
  location: yup.string().required("Este campo es obligatorio"),
  description: yup.string().required("Este campo es obligatorio"),
});

export const loginSchema = yup.object().shape({
  email: yup.string().email("El formato email es invalido").required("El campo email es obligatorio"),
  password: yup
    .string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caractéres"),
});

export const editSchema = yup.object().shape({
  title: yup
    .string()
    .min(3, "El título debe tener al menos 3 caracteres")
    .max(100, "El título no puede tener más de 100 caracteres")
    .notRequired(),

  location: yup
    .string()
    .min(3, "La ubicación debe tener al menos 3 caracteres")
    .max(100, "La ubicación no puede tener más de 100 caracteres")
    .notRequired(),

  image: yup
    .mixed()
    .test("fileSize", "El archivo es demasiado grande", (value) => {
      return value ? value.size <= 5 * 1024 * 1024 : true;
    })
    .test("fileType", "El formato de la imagen no es válido", (value) => {
      return value ? ["image/jpeg", "image/png"].includes(value.type) : true;
    })
    .nullable()
    .notRequired(),

  why: yup
    .string()
    .min(10, "Debes proporcionar al menos 10 caracteres")
    .max(500, "No puedes exceder los 500 caracteres")
    .notRequired(),
});
