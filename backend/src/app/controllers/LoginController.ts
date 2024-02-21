import { Request, Response } from 'express';
//import { getUserByName } from '../database/db'
import { StatusCodes } from 'http-status-codes'

export class LoginController {
   static login (req: Request, res: Response) {
    const {user, password} = req.body;
        const resultUser = getUserByName(user);
        if (!resultUser) {
            return res.status(StatusCodes.NOT_FOUND).send({'message': 'User not found'});
        } 
        if (resultUser.password !== password) {
            return res.status(StatusCodes.UNAUTHORIZED).send({'message': 'Password mismatch'});
        }
        res.status(StatusCodes.ACCEPTED).send({'message': 'Você foi logado com sucesso'});
  }
}

// export default new UserController;
