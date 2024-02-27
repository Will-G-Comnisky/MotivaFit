import * as yup from "yup";

export const planoValidation = yup.object({
  tipo_plano: yup.string().required(),
  valor: yup.number().required(),
  id_admin: yup.number().required(),
  id_aluno: yup.number().required(),
  data_inicio: yup.date().required(),
  data_termino: yup.date().required(),
  recursivo: yup.boolean().required(),
  qtd_recursivo: yup.string().required()
});