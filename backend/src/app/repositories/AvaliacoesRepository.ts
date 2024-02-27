import { prisma } from '../database/prisma';
import Avaliacoes from '../interfaces/avaliacoes.interface'

class AvaliacoesRepository {
  create = async (data: Avaliacoes) => {
    const avaliacao = await prisma.avaliacao.create({
      data,
      select: {
        id_avaliacao: true,
        descricao: true,
        id_admin: true,
        id_aluno: true,
        peso: true,  
        medida_braco_dir_rlx: true,
        medida_braco_esq_rlx: true,
        medida_antebraco_esq: true,
        medida_antebraco_dir: true,
        medida_escapular: true,
        medida_torax: true,
        medida_cintura: true,
        medida_abdomen: true,
        medida_quadril: true,
        medida_coxa_esq: true,
        medida_coxa_dir: true,
        medida_panturrilha_esq: true,
        medida_panturrilha_dir: true,
        dobras_triceps: true,
        dobras_sub_escapular: true,
        dobras_peitoral: true,
        dobras_med_axilar: true,
        dobras_supra_iliaca: true, 
        dobras_abdomen : true,
        dobras_coxa : true, 
        data_avaliacao  : true, 
      }
    });
    return avaliacao;
  }

  getAll = async () => {
    const avaliacoes = await prisma.avaliacao.findMany({
      include: {
        admin: true,
        aluno: {
          include: {
            usuario: true,
          }
        }
      }
    });
    return avaliacoes;
  };

  getById = async (id: number) => {
    const avaliacao = await prisma.avaliacao.findUnique({
      where: {
        id_avaliacao: id
      },
      include: {
        admin: true,
        aluno: {
          include: {
            usuario: true,
          }
        }
      }
    });
    return avaliacao;
  };

  updateAvaliacao = async (id: number, data: Avaliacoes) => {
    const avaliacao = await prisma.avaliacao.update({
      where: {
        id_avaliacao: id
      },
      data,
      include: {
        admin: true,
        aluno: {
          include: {
            usuario: true,
          }
        }
      }
    });
    return avaliacao;
  };

  deleteAvaliacao = async (id: number) => {
    await prisma.avaliacao.delete({
      where: {
        id_avaliacao: id
      },
    });
    return
  };
};

export default new AvaliacoesRepository();