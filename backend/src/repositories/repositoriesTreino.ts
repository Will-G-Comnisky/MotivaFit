import prisma from "../prisma/prisma";
export default class RepositoriesTreino {

  async getTreino(id: number) {
    return await prisma.treino.findUnique({
      where: { id_treino: id },
      include: { treino_exercicio: { include: { exercicio: true } } }
    });
  }

  async getTreinos() {
    return await prisma.treino.findMany({
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

}
