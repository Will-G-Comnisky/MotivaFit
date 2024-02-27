import { prisma } from '../database/prisma';
import Telefone from '../interfaces/telefone.interface'

class TelefoneRepository {
  create = async (data: Telefone) => {
    const telefone = await prisma.telefone.create({
      data,
      select: {
        id_telefone: true,
        ddd: true,
        numero: true,
        id_usuario: true,
      }
    });
    return telefone;
  }

  getAll = async () => {
    const telefones = await prisma.telefone.findMany({
      select: {
        id_telefone: true,
        ddd: true,
        numero: true,
        id_usuario: true
      }
    });
    return telefones;
  };

  getById = async (id: number) => {
    const telefone = await prisma.telefone.findUnique({
      select: {
        id_telefone: true,
        ddd: true,
        numero: true,
        id_usuario: true
      },
      where: {
        id_telefone: id
      }
    });
    return telefone;
  };

  updateTelefone = async (id: number, data: Telefone) => {
    const telefone = await prisma.telefone.update({
      where: {
        id_telefone: id
      },
      data,
      select: {
        id_telefone: true,
        ddd: true,
        numero: true,
        id_usuario: true
      }
    });
    return telefone;
  };

  deleteTelefone = async (id: number) => {
    await prisma.telefone.delete({
      where: {
        id_telefone: id
      },
    });
    return
  };

  getTelefoneByUserId = async (userId: number): Promise<Telefone[]> => {
    const telefones = await prisma.telefone.findMany({
      where: {
        id_usuario: userId
      },
      select: {
        id_telefone: true,
        ddd: true,
        numero: true,
        id_usuario: true
      }
    });
    return telefones;
  };
};

export default new TelefoneRepository();
