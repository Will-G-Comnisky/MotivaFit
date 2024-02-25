import * as yup from "yup";

export const alunoValidation = yup.object({
  id_aluno: yup.number().required(),
  data_nasc: yup.date().required(),
  altura: yup.number().required().min(6),
  xp: yup.number().required(),         
  nivel: yup.number().required(),   
  id_usuario: yup.number().required(),  
  id_admin: yup.number().required(),
});