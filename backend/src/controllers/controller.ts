import { Request, Response } from 'express';
import { getUserByName } from '../app/database/db'
import { StatusCodes } from 'http-status-codes'
import repositorie from '../repositories/respositories';

const repositories = new repositorie();

export class Controller {
  static async getLogin(req: Request, res: Response) {
    const { user, password } = req.body;

    const resultUser = getUserByName(user);
    if (!resultUser) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ 'message': 'User not found' });
    }
    if (resultUser.password !== password) {
      return res.status(StatusCodes.UNAUTHORIZED).send({ 'message': 'Password mismatch' });
    }
    res.status(StatusCodes.ACCEPTED).send({ 'message': 'Você foi logado com sucesso' });
  }

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

  // Rotina de treino

  static async getRotina(req: Request, res: Response) {
    const treinoid = parseInt(req.params.id);
    try {
      const treino = await repositories.getRotina(treinoid);
      res.json(treino);
    } catch (error) {
      console.error('Erro ao buscar treino:', error);
      res.status(500).json({ error: 'Erro ao buscar treino' });
    }
  }

  static async postRotina(req: Request, res: Response) {
    const { nome, usuario, treinos } = req.body;
    console.log(nome, usuario, treinos);
    try {
      await repositories.postRotina(nome, usuario, treinos);
      res.status(StatusCodes.CREATED).send({ 'message': 'Rotina criada com sucesso' });
    } catch (error) {
      console.error('Erro ao criar rotina:', error);
      res.status(500).json({ error: 'Erro ao criar rotina' });
    }
  }

  static async putRotina(req: Request, res: Response) {
    const { id, nome, usuario, treinos } = req.body;
    try {
      await repositories.putRotina(id, nome, usuario, treinos);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Rotina atualizada com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar rotina:', error);
      res.status(500).json({ error: 'Erro ao atualizar rotina' });
    }
  }

  static async deleteRotina(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      await repositories.deleteRotina(id);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Rotina deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar rotina:', error);
      res.status(500).json({ error: 'Erro ao deletar rotina' });
    }
  }

}
