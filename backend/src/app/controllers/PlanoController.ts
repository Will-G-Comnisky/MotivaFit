import { planoValidation } from "../../validations/plano.validation";
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import PlanoRepository from "../repositories/PlanoRepository";

export const PlanoController = {
  async createPlano(req: Request, res: Response) {
    try {
      await planoValidation.validate(req.body);
      const plano = await PlanoRepository.create(req.body);
      res.status(StatusCodes.CREATED).send(plano);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: `Erro ao criar o plano: ${error}`})
    };
  },

  async getAllPlanos(req: Request, res: Response) {
    try {
      const planos = await PlanoRepository.getAll();
      res.status(StatusCodes.OK).send(planos);

    } catch (error) {
        res.status(StatusCodes.BAD_REQUEST).send({ message: `Erro ao consultar todos os planos: ${error}`})
    }
  },

  async getPlanoById(req: Request, res: Response) {
    try {
      const plano = await PlanoRepository.getById(Number(req.params.id));
      if (!plano) {
        res.status(StatusCodes.NOT_FOUND).send("Plano não encontrado");
        return
      }
      res.status(StatusCodes.OK).send(plano);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: `Erro ao consultar este plano: ${error}`})
    }
  },

  async updatePlano(req: Request, res: Response) {
    try {
      const plano = await PlanoRepository.updatePlano(Number(req.params.id), req.body)
      res.status(StatusCodes.OK).send(plano);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: `Erro ao atualizar este plano: ${error}`})
    }
  },

  async deletePlano(req: Request, res: Response) {
    try {
      await PlanoRepository.deletePlano(Number(req.params.id));
      res.status(StatusCodes.OK).send('Plano excluido com sucesso!')
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: `Erro ao excluir este plano: ${error}`})
    };
  },

};
