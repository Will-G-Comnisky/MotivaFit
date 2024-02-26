import { Request, Response, NextFunction } from 'express';
import { StatusCodes } from 'http-status-codes';


export const authorize = (req: Request, res: Response, next: NextFunction) => {
  const { tipo_user } = req.body.tipo_user; // Obter o tipo de usuário do objeto req.user

  // Verificar permissões com base no tipo de usuário
  if (tipo_user === 'admin') {
    // Se for um administrador, permita o acesso
    next();
  } else {
    // Se não for um administrador, negue o acesso
    return res.status(StatusCodes.FORBIDDEN).json({ message: 'Acesso não autorizado' });
  }
};