import jwt from "jsonwebtoken";
import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

export const verifyToken = (req: Request, res: Response, next: any) => {
  const token = req.headers.authorization;

  if(!token) {
    return res.status(StatusCodes.UNAUTHORIZED).send({ message: "Token é obrigatório"})
  }

  try {
    const replace = token.replace("Bearer ", "");
    jwt.verify(replace, String(process.env.TOKEN_KEY));
    next();
  } catch (error) {
    return res.status(StatusCodes.UNAUTHORIZED).send({ message: "Token de segurança inválido"});
  }
}