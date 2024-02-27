import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'
import repositorie from '../repositories/repositoriesExercicio';

const repositories = new repositorie();

export class ControllerExercicio {

  static async getExercicio(req: Request, res: Response) {
    const treinoid = parseInt(req.params.id);
    try {
      const treino = await repositories.getExercicioById(treinoid);
      res.json(treino);
    } catch (error) {
      console.error('Erro ao buscar treino:', error);
      res.status(500).json({ error: 'Erro ao buscar treino' });
    }
  }

  static async getExercicios(req: Request, res: Response) {
    try {
      const exercicios = await repositories.getExercicios();
      res.json(exercicios);
    } catch (error) {
      console.error('Erro ao buscar exercicios:', error);
      res.status(500).json({ error: 'Erro ao buscar exercicios' });
    }
  }
  static async postExercicio(req: Request, res: Response) {
    const { nome } = req.body;
    try {
      await repositories.postExercicio(nome);
      res.status(StatusCodes.CREATED).send({ 'message': 'Exercicio criado com sucesso' });
    } catch (error) {
      console.error('Erro ao criar exercicio:', error);
      res.status(500).json({ error: 'Erro ao criar exercicio' });
    }
  }
  static async putExercicio(req: Request, res: Response) {
    const { id, nome } = req.body;
    try {
      await repositories.putExercicio(id, nome);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Exercicio atualizado com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar exercicio:', error);
      res.status(500).json({ error: 'Erro ao atualizar exercicio' });
    }
  }
  static async deleteExercicio(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      await repositories.deleteExercicio(id);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Exercicio deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar exercicio:', error);
      res.status(500).json({ error: 'Erro ao deletar exercicio' });
    }
  }
}
