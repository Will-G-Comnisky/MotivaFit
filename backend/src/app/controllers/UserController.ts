import bcrypt from "bcrypt";
import { userValidation } from "../../validations/user.validation"
import { StatusCodes } from 'http-status-codes'
import { request, Request, response, Response } from 'express';
import UserRepository from '../repositories/UserRepository';

export const UserController = {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      await userValidation.validate(req.body);

      const senhaHash = await bcrypt.hash(req.body.senha, 10);
      req.body.senha = senhaHash;

      const user = await UserRepository.create(req.body);
      res.status(StatusCodes.CREATED).send(user);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error);    
    }
  },

  async getAllUsers(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserRepository.getAll();
      res.status(StatusCodes.OK).send(users);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserRepository.getById(Number(req.params.id));

      if (!user) {
        res.status(StatusCodes.NOT_FOUND).send("Usuário não encontrado");
        return;
      }

      res.status(StatusCodes.OK).send(user);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async updateUser(req: Request, res: Response): Promise<void> {
    try {
      const user = await UserRepository.updateUser(Number(req.params.id), req.body);
      res.status(StatusCodes.OK).send(user);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async deleteUser(req: Request, res: Response): Promise<void> {
    try {
      await UserRepository.deleteUser(Number(req.params.id));
      res.status(StatusCodes.OK).send('Usuário removido com sucesso!')
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


