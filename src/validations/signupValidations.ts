import * as Yup from "yup";

const noNumbers = /^([^0-9]*)$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, "Longitud mínima de 3 caracteres")
    .max(30, "Longitud máxima de 30 caracteres")
    .required("Nombre requerido")
    .matches(noNumbers, "Los números no son permitidos"),
  email: Yup.string()
    .email("Correo no válido")
    .min(1, "Longitud mínima de 3 caracteres")
    .max(256, "Longitud máxima de 256 caracteres")
    .required("Correo requerido"),
  password: Yup.string()
    .min(8, "Longitud mínima de 8 caracteres")
    .max(30, "Longitud máxima de 30 caracteres")
    .required("Contraseña requerida"),
});

export default validationSchema;
