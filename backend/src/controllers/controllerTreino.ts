import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'
import repositorie from '../repositories/repositoriesTreino';

const repositories = new repositorie();

export class ControllerTreino {

  static async getTreino(req: Request, res: Response) {
    const treinoid = parseInt(req.params.id);
    try {
      const treino = await repositories.getTreino(treinoid);
      res.json(treino);
    } catch (error) {
      console.error('Erro ao buscar treino:', error);
      res.status(500).json({ error: 'Erro ao buscar treino' });
    }
  }

  static async getTreinos(req: Request, res: Response) {
    try {
      const treinos = await repositories.getTreinos();
      res.json(treinos);
    } catch (error) {
      console.error('Erro ao buscar treinos:', error);
      res.status(500).json({ error: 'Erro ao buscar treinos' });
    }
  }

  static async postTreino(req: Request, res: Response) {
    const { nome, exercicios } = req.body;
    try {
      await repositories.postTreino(nome, exercicios);
      res.status(StatusCodes.CREATED).send({ 'message': 'Treino criado com sucesso' });
    } catch (error) {
      console.error('Erro ao criar treino:', error);
      res.status(500).json({ error: 'Erro ao criar treino' });
    }
  }

  static async putTreino(req: Request, res: Response) {
    const { id, nome, exercicios } = req.body;
    try {
      await repositories.putTreino(id, nome, exercicios);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Treino atualizado com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar treino:', error);
      res.status(500).json({ error: 'Erro ao atualizar treino' });
    }
  }
  static async deleteTreino(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      await repositories.deleteTreino(id);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Treino deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar treino:', error);
      res.status(500).json({ error: 'Erro ao deletar treino' });
    }
  }
}
