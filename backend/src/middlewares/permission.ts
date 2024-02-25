import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';

export const checkAuthorization = (requiredType: boolean) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const userType: boolean = req.body.tipo_user;

        if (userType === requiredType) {
            next();
        } else {
            res.status(StatusCodes.FORBIDDEN).send('Usuário não autorizado');
        }
    };
};