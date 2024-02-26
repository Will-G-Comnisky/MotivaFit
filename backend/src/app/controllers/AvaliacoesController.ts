import { avaliacoesValidation } from "../../validations/avaliacoes.validation";
import { StatusCodes } from "http-status-codes";
import { request, Request, Response } from "express";
import AvaliacoesRepository from "../repositories/AvaliacoesRepository";

export const AvaliacoesController = {
  async createAvaliacao(req: Request, res: Response) {
    try {
      const avaliacoes = await AvaliacoesRepository.create(req.body);
      res.status(StatusCodes.CREATED).send(avaliacoes);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: error})
    };
  },

  async getAllAvaliacoes(req: Request, res: Response) {
    try {
      const avaliacoes = await AvaliacoesRepository.getAll();
      res.status(StatusCodes.OK).send(avaliacoes);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({message: error}); 
    };
  },

  async getAvaliacoById(req: Request, res: Response) {
    try {
      const avaliacao = await AvaliacoesRepository.getById(Number(req.params.id));

      if (!avaliacao) {
        res.status(StatusCodes.NOT_FOUND).send("Avaliação não encontrada");
        return
      }

      res.status(StatusCodes.OK).send(avaliacao);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: error})
    }
  },

  async updateAvaliacao(req: Request, res: Response): Promise<void> {
    try {
      const avaliacao = await AvaliacoesRepository.updateAvaliacao(Number(req.params.id), req.body);
      res.status(StatusCodes.OK).send(avaliacao);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({message: error}); 
    }
  },

  async deleteAvaliacao(req: Request, res: Response): Promise<void> {
    try {
      await AvaliacoesRepository.deleteAvaliacao(Number(req.params.id));
      res.status(StatusCodes.OK).send('Avaliação excluida com sucesso!')
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({message: error});
    }
  }
}