
interface Avaliacoes {
  id_avaliacao: number;
  descricao: string;
  id_admin: number;
  id_aluno: number;  
  peso: string    
  medida_braco_dir_rlx: string;
  medida_braco_esq_rlx: string;
  medida_antebraco_esq: string;
  medida_antebraco_dir: string;
  medida_escapular: string; 
  medida_torax: string;
  medida_cintura: string;
  medida_abdomen: string;
  medida_quadril: string;
  medida_coxa_esq: string;
  medida_coxa_dir: string;
  medida_panturrilha_esq: string;
  medida_panturrilha_dir: string;
  dobras_triceps: string;
  dobras_sub_escapular: string;
  dobras_peitoral: string;  
  dobras_med_axilar: string;  
  dobras_supra_iliaca: string;  
  dobras_abdomen : string;
  dobras_coxa : string; 
  data_avaliacao  : string;      
}

export default Avaliacoes
