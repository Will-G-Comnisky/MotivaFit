import { usuario } from '@prisma/client';
import { prisma } from '../database/prisma';


class UserRepository {
  create = async (data: usuario) => {
    const user = await prisma.usuario.create({
      data,
    });
    return user;
  }
}

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

