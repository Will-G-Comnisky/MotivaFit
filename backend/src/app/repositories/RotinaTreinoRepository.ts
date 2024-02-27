import { prisma } from '../database/prisma';

class RotinaTreino {
  async getExercicioById(id: number) {
    const exercicio = await prisma.exercicio.findUnique({
      where: { id_exercicio: id }
    });
    return exercicio
  }

  async getExercicios() {
    const exercicios = await prisma.exercicio.findMany();
    return exercicios
  }

  async getTreino() {
    const treino =  await prisma.treino.findMany({
      include: { treino_exercicio: { include: { exercicio: true } } }
    });
    return treino
  }

  async getTreinoById(id: number) {
    const treino =  await prisma.treino.findUnique({
      where: { id_treino: id },
      include: { treino_exercicio: { include: { exercicio: true } } }
    });
    return treino
  }



  async createTreino(nome: string, exercicios: { id_exercicio: number, qtd_serie: number, qtd_rep: number, qtd_carga: string, comentario?: string }[]) {
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
    return createdTreino;
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
    return updatedTreino;
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
    return
  }

  // Rotina de rotina



  async getRotina() {
    const rotina = await prisma.rotina.findMany({
      include: {
        rotina_treino: {
          include: {
            treino: {
              include: {
                treino_exercicio: {
                  include: {
                    exercicio: true
                  }
                }
              }
            }
          }
        }
      }
    });
    return rotina;
  }

  async getRotinaById(id: number) {
    const rotina = await prisma.rotina.findUnique({
      where: { id_rotina: id },
      include: {
        rotina_treino: {
          include: {
            treino: {
              include: {
                treino_exercicio: {
                  include: {
                    exercicio: true
                  }
                }
              }
            }
          }
        }
      }
    });
    return rotina;
  }




  async createRotina(nome: string, usuario: { id_usuario: number }, treinos: { id_treino: number }[]) {
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
        rotina_treino: {
          include: { treino: true }
        }
      }
    });
    return createdRotina;
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
    return updatedRotina;
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
    return deletedRotina;
  }
}

export default new RotinaTreino();
