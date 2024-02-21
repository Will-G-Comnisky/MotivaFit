import bcrypt from "bcrypt";
import { StatusCodes } from 'http-status-codes'
import { request, Request, Response } from 'express';
import UserRepository from '../repositories/UserRepository';

export const UserController = {
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const senhaHash = await bcrypt.hash(req.body.senha, 10);
      req.body.senha = senhaHash;
      const user = await UserRepository.create(req.body);
      res.status(StatusCodes.CREATED).send(user);
    } catch (error) {
      res.status(StatusCodes.BAD_GATEWAY).send(error);    
    }
  },


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


