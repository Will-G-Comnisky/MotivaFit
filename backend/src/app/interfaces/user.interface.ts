interface User {
  id_usuario: number;
  user_id: string;
  tipo_user: string;
  senha: string;
  cpf: string;
  email: string;
  nome: string;
  id_endereco: number;
  userimg: string | null;
}

export default User;