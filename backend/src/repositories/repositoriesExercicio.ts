import prisma from "../prisma/prisma";
export default class RepositoriesExercicio {

  async getExercicioById(id: number) {
    return await prisma.exercicio.findUnique({
      where: { id_exercicio: id }
    });
  }

  async getExercicios() {
    return await prisma.exercicio.findMany();
  }

  async postExercicio(nome: string) {
    const createdExercicio = await prisma.exercicio.create({
      data: {
        nome_exercicio: nome,
      }
    });
  }

  async putExercicio(id: number, nome: string) {
    const updatedExercicio = await prisma.exercicio.update({
      where: { id_exercicio: id },
      data: {
        nome_exercicio: nome
      }
    });
  }

  async deleteExercicio(id: number) {
    const deletedExercicio = await prisma.exercicio.delete({
      where: { id_exercicio: id }
    });
  }

}
