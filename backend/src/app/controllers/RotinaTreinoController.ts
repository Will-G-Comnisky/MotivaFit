import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'
import RotinaTreino from '../repositories/RotinaTreinoRepository';

export class Controller {

  static async getExercicio(req: Request, res: Response) {
    const treinoid = parseInt(req.params.id);
    try {
      const treino = await RotinaTreino.getExercicioById(treinoid);
      res.status(StatusCodes.OK).send(treino);
    } catch (error) {
      console.error('Erro ao buscar treino:', error);
      res.status(StatusCodes.BAD_GATEWAY).send({ error: 'Erro ao buscar treino' });
    }
  }

  static async getExercicios(req: Request, res: Response) {
    try {
      const exercicios = await RotinaTreino.getExercicios();
      res.json(exercicios);
    } catch (error) {
      console.error('Erro ao buscar exercicios:', error);
      res.status(500).json({ error: 'Erro ao buscar exercicios' });
    }
  }

  static async getTreino(req: Request, res: Response) {
    const treinoid = parseInt(req.params.id);
    try {
      const treino = await RotinaTreino.getTreino(treinoid);
      res.json(treino);
    } catch (error) {
      console.error('Erro ao buscar treino:', error);
      res.status(500).json({ error: 'Erro ao buscar treino' });
    }
  }

  static async createTreino(req: Request, res: Response) {
    const { nome, exercicios } = req.body;
    try {
      await RotinaTreino.createTreino(nome, exercicios);
      res.status(StatusCodes.CREATED).send({ 'message': 'Treino criado com sucesso' });
    } catch (error) {
      console.error('Erro ao criar treino:', error);
      res.status(500).json({ error: 'Erro ao criar treino' });
    }
  }

  static async putTreino(req: Request, res: Response) {
    const { id, nome, exercicios } = req.body;
    try {
      await RotinaTreino.putTreino(id, nome, exercicios);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Treino atualizado com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar treino:', error);
      res.status(500).json({ error: 'Erro ao atualizar treino' });
    }
  }
  static async deleteTreino(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      await RotinaTreino.deleteTreino(id);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Treino deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar treino:', error);
      res.status(500).json({ error: 'Erro ao deletar treino' });
    }
}

  // Rotina de treino

  static async getRotina(req: Request, res: Response) {
    const treinoid = parseInt(req.params.id);
    try {
      const treino = await RotinaTreino.getRotina(treinoid);
      res.json(treino);
    } catch (error) {
      console.error('Erro ao buscar treino:', error);
      res.status(500).json({ error: 'Erro ao buscar treino' });
    }
  }

  static async createRotina(req: Request, res: Response) {
    const { nome, usuario, treinos } = req.body;
    console.log(nome, usuario, treinos);
    try {
      await RotinaTreino.createRotina(nome, usuario, treinos);
      res.status(StatusCodes.CREATED).send({ 'message': 'Rotina criada com sucesso' });
    } catch (error) {
      console.error('Erro ao criar rotina:', error);
      res.status(500).json({ error: 'Erro ao criar rotina' });
    }
  }

  static async putRotina(req: Request, res: Response) {
    const { id, nome, usuario, treinos } = req.body;
    try {
      await RotinaTreino.putRotina(id, nome, usuario, treinos);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Rotina atualizada com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar rotina:', error);
      res.status(500).json({ error: 'Erro ao atualizar rotina' });
    }
  }

  static async deleteRotina(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      await RotinaTreino.deleteRotina(id);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Rotina deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar rotina:', error);
      res.status(500).json({ error: 'Erro ao deletar rotina' });
    }
  }

}
