import prisma from "../prisma/prisma";

export default class RotinaTreino {

  async getExercicioById(id: number) {
    return await prisma.exercicio.findUnique({
      where: { id_exercicio: id }
    });
  }

  async getTreino(id: number) {
    return await prisma.treino.findUnique({
      where: { id_treino: id },
      include: { treino_exercicio: { include: { exercicio: true } } }
    });
  }

  async postTreino(nome: string, exercicios: { id_exercicio: number, qtd_serie: number, qtd_rep: number, qtd_carga: string, comentario?: string }[]) {
    const createdTreino = await prisma.treino.create({
      data: {
        // Add the id_treino property
        nome: nome,
        treino_exercicio: {
          create: exercicios.map(exercicio => ({
            qtd_serie: exercicio.qtd_serie,
            qtd_rep: exercicio.qtd_rep,
            qtd_carga: exercicio.qtd_carga,
            comentario: exercicio.comentario,
            exercicio: { connect: { id_exercicio: exercicio.id_exercicio } }
          }))
        }
      },
      include: {
        treino_exercicio: { include: { exercicio: true } }
      }
    });
  }

  async putTreino(id: number, nome: string, exercicios: { id_exercicio: number, qtd_serie: number, qtd_rep: number, qtd_carga: string, comentario?: string }[]) {
    const updatedTreino = await prisma.treino.update({
      where: { id_treino: id },
      data: {
        nome: nome,
        treino_exercicio: {
          deleteMany: {},
          create: exercicios.map(exercicio => ({
            qtd_serie: exercicio.qtd_serie,
            qtd_rep: exercicio.qtd_rep,
            qtd_carga: exercicio.qtd_carga,
            comentario: exercicio.comentario,
            exercicio: { connect: { id_exercicio: exercicio.id_exercicio } }
          }))
        }
      },
      include: {
        treino_exercicio: { include: { exercicio: true } }
      }
    });
  }

  async deleteTreino(id: number) {

    // primeiro tive que deletar todos os registros com id_treino = id
    const deletedTreinoExercicio = await prisma.treino_exercicio.deleteMany({
      where: { id_treino: id }
    });

    const deletedTreino = await prisma.treino.delete({
      where: { id_treino: id },
      include: {
        treino_exercicio: { include: { exercicio: true } }
      }
    });
  }

  // Rotina de rotina

  async getRotina(id: number) {
    return await prisma.rotina.findUnique({
      where: { id_rotina: id },
      include: { rotina_treino: { include: { treino: true } } }
    });
  }

  async postRotina(nome: string, usuario: { id_usuario: number }, treinos: { id_treino: number }[]) {
    const createdRotina = await prisma.rotina.create({
      data: {
        nome: nome,
        usuario: {
          connect: {
            id_usuario: usuario.id_usuario
          },
        },
        rotina_treino: {
          create: treinos.map(treino => ({
            treino: { connect: { id_treino: treino.id_treino } }
          }))
        }
      },
      include: {
        rotina_treino: { include: { treino: true } }
      }
    });
  }

  async putRotina(id: number, nome: string, usuario: { id_usuario: number }, treinos: { id_treino: number }[]) {
    const updatedRotina = await prisma.rotina.update({
      where: { id_rotina: id },
      data: {
        nome: nome,
        usuario: {
          connect: {
            id_usuario: usuario.id_usuario
          },
        },
        rotina_treino: {
          deleteMany: {},
          create: treinos.map(treino => ({
            treino: { connect: { id_treino: treino.id_treino } }
          }))
        }
      },
      include: {
        rotina_treino: { include: { treino: true } }
      }
    });
  }

  async deleteRotina(id: number) {
      // primeiro tive que deletar todos os registros com id_rotina = id
      const deletedRotinaTreino = await prisma.rotina_treino.deleteMany({
        where: { id_rotina: id }
      });

      const deletedRotina = await prisma.rotina.delete({
        where: { id_rotina: id },
        include: {
          rotina_treino: { include: { treino: true } }
        }
      });
    }

}
