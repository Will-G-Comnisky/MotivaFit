import { Prisma, usuario } from '@prisma/client';
import { prisma } from '../database/prisma';
import User from '../interfaces/user.interface'



class UserRepository {
  create = async (data: User) => {
    const user = await prisma.usuario.create({
      data,
      select: {
        id_usuario: true, 
        user_id: true,
        tipo_user: true,
        senha: false,
        cpf: true,         
        email: true,       
        nome: true,        
        id_endereco: true, 
        userimg: true
      }
    });
    return user;
  }

  getAll = async () => {
    const users = await prisma.usuario.findMany({
      select: {
        id_usuario: true, 
        user_id: true,
        tipo_user: true,
        senha: false,
        cpf: true,         
        email: true,       
        nome: true,        
        id_endereco: true, 
        userimg: true
      },
    });
    return users;
  };

  getById = async (id: number) => {
    const user = await prisma.usuario.findUnique({
      select: {
        id_usuario: true, 
        user_id: true,
        tipo_user: true,
        senha: false,
        cpf: true,         
        email: true,       
        nome: true,        
        id_endereco: true, 
        userimg: true
      },
      where: {
        id_usuario: id
      }
    });
    return user;
  }

  updateUser = async (id: number, data: User) => {
    const user = await prisma.usuario.update({
      where: {
        id_usuario: id
      },
      data,
      select: {
        id_usuario: true, 
        user_id: true,
        tipo_user: true,
        senha: false,
        cpf: true,         
        email: true,       
        nome: true,        
        id_endereco: true, 
        userimg: true
      },
    });
    return user;
  };

  deleteUser = async (id: number) => {
    await prisma.usuario.delete({
      where: {
        id_usuario: id
      },
    });
    return;
  }
};

export default new UserRepository();



/*
export const userRepository = {

  async createUser(data: usuario): Promise<usuario> {
    return prisma.usuario.create({ data });
  },

  async getUsers(): Promise<usuario[]> {
    return prisma.usuario.findMany();
  },

  async getUsersById(id: number): Promise<usuario | null> {
    return await prisma.usuario.findUnique({
      where: { id_usuario: id },
    });
  },

  async updateUser(id: number, data: Partial<usuario>): Promise<usuario | null> {
    return prisma.usuario.update({
      where: { id_usuario: id},
      data,
    });
  },

  async deleteUser(id: number): Promise<usuario | null> {
    return prisma.usuario.delete({ 
      where: {id_usuario: id},
    });
  },
}
*/

