import { prisma } from '../database/prisma';
import Plano from '../interfaces/plano.interface'


class PlanoRepository {
  create = async (data: Plano) => {
    const plano = await prisma.plano.create({
      data,
      select: {
        id_plano: true, 
        tipo_plano: true,
        valor: true,
        id_admin: true,
        id_aluno: true,         
        data_inicio: true,       
        data_termino: true,         
        recursivo: true,
        qtd_recursivo: true
      }
    });
    return plano;
  }

  getAll = async () => {
    const planos = await prisma.plano.findMany({
      include: {
        admin: {
          include: {
            usuario: true
          }
        },
        aluno: {
          include: {
            usuario: true,
          }
        }
      }
    });
    return planos;
  };

  getById = async (id: number) => {
    const plano = await prisma.plano.findUnique({
      where: {
        id_plano: id,
      },
      include: {
        admin: true,
        aluno: {
          include: {
            usuario: true,
          }
        }
      },
    });
    return plano;
  }

  updatePlano = async (id: number, data: Plano) => {
    const plano = await prisma.plano.update({
      where: {
        id_plano: id
      },
      data,
      select: {
        id_plano: true, 
        tipo_plano: true,
        valor: true,
        id_admin: true,
        id_aluno: true,         
        data_inicio: true,       
        data_termino: true,         
        recursivo: true,
        qtd_recursivo: true
      },
    });
    return plano;
  };

  deletePlano = async (id: number) => {
    await prisma.plano.delete({
      where: {
        id_plano: id
      },
    });
    return;
  };
};

export default new PlanoRepository();



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

