// src/hooks/validationSchemas.js
import * as yup from 'yup';

export const signUpSchema = yup.object().shape({
  name: yup.string().required('El campo nombre es obligatorio'),
  email: yup.string().email('El formato email es invalido').required('El campo email es obligatorio'),
  password: yup.string().required('La contraseña es obligatoria').min(6, 'La contraseña debe tener al menos 6 caractéres'),
});