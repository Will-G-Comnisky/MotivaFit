import prisma from "../prisma/prisma";

export default class RepositoriesRotina {


  async getRotina(id: number) {
    return await prisma.rotina.findUnique({
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
  }

  async getRotinas() {
    return await prisma.rotina.findMany({
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
        rotina_treino: {
          include: { treino: true }
        }
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
