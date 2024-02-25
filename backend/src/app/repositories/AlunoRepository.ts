import { prisma } from '../database/prisma';
import Aluno from '../interfaces/aluno.interface'

class AlunoRepository {
  create = async (data: Aluno) => {
    const user = await prisma.aluno.create({
      data,
      select: {
        id_aluno: true, 
        data_nasc: true,
        altura: true,
        xp: true,
        nivel: true,         
        id_usuario: true,       
        id_admin: true,        
      }
    });
    return user;
  }

  getAll = async () => {
    const alunos = await prisma.aluno.findMany({
      select: {
        id_aluno: true, 
        data_nasc: true,
        altura: true,
        xp: true,
        nivel: true,         
        id_usuario: true,       
        id_admin: true,  
      },
    });
    return alunos;
  };

  getById = async (id: number) => {
    const aluno = await prisma.aluno.findUnique({
      where: {
        id_aluno: id
      },
      include: {
        admin: true,
        usuario: {
          include: {
            endereco: true
          }
        },
      }
    });
    return aluno;
  }

  updateUser = async (id: number, data: Aluno) => {
    const aluno = await prisma.aluno.update({
      where: {
        id_aluno: id
      },
      data,
      select: {
        id_aluno: true, 
        data_nasc: true,
        altura: true,
        xp: true,
        nivel: true,         
        id_usuario: true,       
        id_admin: true,  
      },
    });
    return aluno;
  };

  deleteUser = async (id: number) => {
    await prisma.aluno.delete({
      where: {
        id_aluno: id
      },
    });
    return;
  };
};

export default new AlunoRepository();
