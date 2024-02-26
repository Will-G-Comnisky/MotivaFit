import { StatusCodes } from 'http-status-codes'
import { Request, Response } from 'express';
import TelefoneRepository from '../repositories/TelefoneRepository';
import { telefoneValidation } from "../../validations/telefone.validation";

export const TelefoneController = {
  async createTelefone (req: Request, res: Response) {
    try {
      await telefoneValidation.validate(req.body);

      const telefone = await TelefoneRepository.create(req.body);
      res.status(StatusCodes.CREATED).send(telefone);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: 'Erro em TelefoneController na função createTelefone', error});
    }
  },

  async getAllTelefones(req: Request, res: Response): Promise<void> {
    try {
      const telefones = await TelefoneRepository.getAll();
      res.status(StatusCodes.OK).send(telefones);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: error });
    }
  },

  async getTelefoneById(req: Request, res: Response) {
    try {
      const telefone = await TelefoneRepository.getById(Number(req.params.id));

      if (!telefone) {
        res.status(StatusCodes.NOT_FOUND).send("Endereço não encontrado");
        return;
      }
      res.status(StatusCodes.OK).send(telefone);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: error });
    }
  },

  async updateTelefone(req: Request, res: Response) {
    try {
      const telefone = await TelefoneRepository.updateTelefone(Number(req.params.id), req.body);
      res.status(StatusCodes.OK).send(telefone);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: error });
    }
  },

  async deleteTelefone(req: Request, res: Response) {
    try {
      await TelefoneRepository.deleteTelefone(Number(req.params.id));
      res.status(StatusCodes.OK).send('Telefone deletado com sucesso');

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: error });
    }
  }
}