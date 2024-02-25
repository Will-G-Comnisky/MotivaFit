import * as yup from "yup";

export const userValidation = yup.object({
  tipo_user: yup.boolean().required(),
  senha: yup.string().required().min(6),
  cpf: yup.string().required(),         
  email: yup.string().required().email(),      
  nome: yup.string().required(),  
  id_endereco: yup.string().required(),
  userimg: yup.string().nullable(),
})