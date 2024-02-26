
import { StatusCodes } from 'http-status-codes'
import { Request, Response } from 'express';
import AddressRepository from '../repositories/AddressRepository';
import { addressValidation } from "../../validations/address.validation"


export const AddressController = {
  async createAddress(req: Request, res: Response) {
    try {
      await addressValidation.validate(req.body);

      const address = await AddressRepository.create(req.body);
      res.status(StatusCodes.CREATED).send(address);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send({ message: error});
    }
  },

  async getAllAddresses(req: Request, res: Response): Promise<void> {
    try {
      const addresses = await AddressRepository.getAll();
      res.status(StatusCodes.OK).send(addresses);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async getAddressById(req: Request, res: Response) {
    try {
      const address = await AddressRepository.getById(Number(req.params.id));

      if (!address) {
        res.status(StatusCodes.NOT_FOUND).send("Endereço não encontrado");
        return;
      }
      res.status(StatusCodes.OK).send(address);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async updateAddress(req: Request, res: Response): Promise<void> {
    try {
      const address = await AddressRepository.updateAddress(Number(req.params.id), req.body);
      res.status(StatusCodes.OK).send(address);

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async deleteAddress(req: Request, res: Response): Promise<void> {
    try {
      await AddressRepository.deleteAddress(Number(req.params.id));
      res.status(StatusCodes.OK).send('Endereço deletado com sucesso!')

    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error);
    }
  }
}

/*
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserRepository.getUsers();
      res.json(users);
    } catch (error) {
      res.status(StatusCodes.BAD_GATEWAY).json({ error: 'Erro ao consultar usuários'});
    }
  },

  async getUsersById(req: Request, res: Response): Promise<void> {
    
  }
*/


