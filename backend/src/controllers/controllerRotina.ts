import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'
import repositorie from '../repositories/repositoriesRotina';

const repositories = new repositorie();

export class ControllerRotina {


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

  static async getRotinas(req: Request, res: Response) {
    try {
      const rotinas = await repositories.getRotinas();
      res.json(rotinas);
    } catch (error) {
      console.error('Erro ao buscar rotinas:', error);
      res.status(500).json({ error: 'Erro ao buscar rotinas' });
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
