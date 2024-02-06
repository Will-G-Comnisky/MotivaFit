import { Router, Request, Response } from "express";
import {getUserByName} from './app/database/db'
import { StatusCodes } from 'http-status-codes'


const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.send('Welcome!')
});

router.get("/login", (req: Request, res: Response) => {
    const {user, password} = req.body;
        const resultUser = getUserByName(user);
        if (!resultUser) {
            return res.status(StatusCodes.UNAUTHORIZED).send({'message': 'User not found'});
        } 
        if (resultUser.password !== password) {
            return res.status(StatusCodes.UNAUTHORIZED).send({'message': 'Password mismatch'});
        }
        res.status(StatusCodes.ACCEPTED).send({'message': 'Você foi logado com sucesso'});
})


export default router;
