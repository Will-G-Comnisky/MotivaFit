import * as yup from "yup";

export const addressValidation = yup.object({
  cep: yup.string().required(),
  cidade: yup.string().required(),
  estado: yup.string().required(),
  uf: yup.string().required(),
  bairro: yup.string().required(),
  endereco: yup.string().required(),
  numero: yup.string().required(),
  complemento: yup.string(),
})