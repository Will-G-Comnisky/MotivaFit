import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes'
import RotinaTreinoRepository from '../repositories/RotinaTreinoRepository';

export const RotinaTreinoController = {

  async getExercicio(req: Request, res: Response) {
    const treinoid = parseInt(req.params.id);
    try {
      const treino = await RotinaTreinoRepository.getExercicioById(treinoid);
      res.status(StatusCodes.OK).send(treino);
    } catch (error) {
      console.error('Erro ao buscar treino:', error);
      res.status(StatusCodes.BAD_GATEWAY).send({ error: 'Erro ao buscar treino' });
    }
  },

  async getExercicios(req: Request, res: Response) {
    try {
      const exercicios = await RotinaTreinoRepository.getExercicios();
      res.json(exercicios);
    } catch (error) {
      console.error('Erro ao buscar exercicios:', error);
      res.status(500).json({ error: 'Erro ao buscar exercicios' });
    }
  },


  async getTreinos(req: Request, res: Response) {
    try {
      const treinos = await RotinaTreinoRepository.getTreino();
      res.status(StatusCodes.OK).send(treinos)
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: `Erro ao consultar todos os treinos: ${error}`})
    }
  },

  async getTreinoById(req: Request, res: Response) {
    const treinoid = parseInt(req.params.id);
    try {
      const treino = await RotinaTreinoRepository.getTreinoById(treinoid);
      res.json(treino);
    } catch (error) {
      console.error('Erro ao buscar treino:', error);
      res.status(500).json({ error: 'Erro ao buscar treino' });
    }
  },

  async createTreino(req: Request, res: Response) {
    const { nome, exercicios } = req.body;
    try {
      await RotinaTreinoRepository.createTreino(nome, exercicios);
      res.status(StatusCodes.CREATED).send({ 'message': 'Treino criado com sucesso' });
    } catch (error) {
      console.error('Erro ao criar treino:', error);
      res.status(500).json({ error: 'Erro ao criar treino' });
    }
  },

  async putTreino(req: Request, res: Response) {
    const { id, nome, exercicios } = req.body;
    try {
      await RotinaTreinoRepository.putTreino(id, nome, exercicios);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Treino atualizado com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar treino:', error);
      res.status(500).json({ error: 'Erro ao atualizar treino' });
    }
  },

  async deleteTreino(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      await RotinaTreinoRepository.deleteTreino(id);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Treino deletado com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar treino:', error);
      res.status(500).json({ error: 'Erro ao deletar treino' });
    }
},

  // Rotina de treino

  async getRotina(req: Request, res: Response) {
    try {
      const rotinas = await RotinaTreinoRepository.getRotina();
      res.status(StatusCodes.OK).send(rotinas);
      
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: `Erro ao consultar todos as rotinas: ${error}`})
    }
  },


  async getRotinaById(req: Request, res: Response) {
    const treinoid = parseInt(req.params.id);
    try {
      const treino = await RotinaTreinoRepository.getRotinaById(treinoid);
      res.json(treino);
    } catch (error) {
      console.error('Erro ao buscar treino:', error);
      res.status(500).json({ error: 'Erro ao buscar treino' });
    }
  },

  async createRotina(req: Request, res: Response) {
    const { nome, usuario, treinos } = req.body;
    console.log(nome, usuario, treinos);
    try {
      await RotinaTreinoRepository.createRotina(nome, usuario, treinos);
      res.status(StatusCodes.CREATED).send({ 'message': 'Rotina criada com sucesso' });
    } catch (error) {
      console.error('Erro ao criar rotina:', error);
      res.status(500).json({ error: 'Erro ao criar rotina' });
    }
  },

  async putRotina(req: Request, res: Response) {
    const { id, nome, usuario, treinos } = req.body;
    try {
      await RotinaTreinoRepository.putRotina(id, nome, usuario, treinos);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Rotina atualizada com sucesso' });
    } catch (error) {
      console.error('Erro ao atualizar rotina:', error);
      res.status(500).json({ error: 'Erro ao atualizar rotina' });
    }
  },

  async deleteRotina(req: Request, res: Response) {
    const id = parseInt(req.params.id);
    try {
      await RotinaTreinoRepository.deleteRotina(id);
      res.status(StatusCodes.ACCEPTED).send({ 'message': 'Rotina deletada com sucesso' });
    } catch (error) {
      console.error('Erro ao deletar rotina:', error);
      res.status(500).json({ error: 'Erro ao deletar rotina' });
    }
  }

}
