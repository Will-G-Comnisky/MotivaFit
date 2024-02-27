interface Plano {
  id_plano: number;
  tipo_plano: string;
  valor: number;
  id_admin: number;
  id_aluno: number;
  data_inicio: Date;
  data_termino: Date;
  recursivo: boolean;
  qtd_recursivo: string;
}

export default Plano;
