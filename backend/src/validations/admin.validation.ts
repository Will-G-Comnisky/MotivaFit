import * as yup from "yup";

export const adminValidation = yup.object({
  cref: yup.string().nullable(),
  cnpj: yup.string().nullable(),
  id_usuario: yup.number().required(),          
});