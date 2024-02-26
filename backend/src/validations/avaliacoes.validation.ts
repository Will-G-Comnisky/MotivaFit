import * as yup from "yup";

export const avaliacoesValidation = yup.object({
  descricao: yup.string().required(),
  id_admin: yup.number().required(),
  id_aluno: yup.number().required(),    
  peso: yup.string().required(),      
  medida_braco_dir_rlx: yup.string().required(),
  medida_braco_esq_rlx: yup.string().required(),  
  medida_antebraco_esq: yup.string().required(),  
  medida_antebraco_dir: yup.string().required(),  
  medida_escapular: yup.string().required(),  
  medida_torax: yup.string().required(),  
  medida_cintura: yup.string().required(),  
  medida_abdomen: yup.string().required(),
  medida_quadril: yup.string().required(),
  medida_coxa_esq: yup.string().required(),
  medida_coxa_dir: yup.string().required(),
  medida_panturrilha_esq: yup.string().required(),
  medida_panturrilha_dir: yup.string().required(),
  dobras_triceps: yup.string().required(),
  dobras_sub_escapular: yup.string().required(),
  dobras_peitoral: yup.string().required(),    
  dobras_med_axilar: yup.string().required(),    
  dobras_supra_iliaca: yup.string().required(),    
  dobras_abdomen : yup.string().required(),
  dobras_coxa : yup.string().required(),    
  data_avaliacao  : yup.date().required(),        
})