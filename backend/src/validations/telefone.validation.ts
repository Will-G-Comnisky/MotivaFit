import * as yup from "yup";

export const telefoneValidation = yup.object({
  ddd: yup.string().required(),
  numero: yup.string().required(),
  id_usuario: yup.number().required()  
});