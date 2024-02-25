import * as yup from "yup";

export const alunoValidation = yup.object({
  data_nasc: yup.string().required(),
  altura: yup.number().required(),
  xp: yup.number().required(),         
  nivel: yup.number().required(),   
  id_usuario: yup.number().required(),  
  id_admin: yup.number().required(),
});