import { prisma } from "../database/prisma";
import jwt from 'jsonwebtoken';
import { StatusCodes } from "http-status-codes";
import { Request, Response } from "express";
import bcrypt from "bcrypt"

export const authenticate = async (req: Request, res: Response) => {
  try {
    const { user_id, tipo_user, senha} = req.body;

    if(!(user_id && senha)) {
      return res.status(StatusCodes.BAD_REQUEST).send({ message: "Usuário e senha devem ser preenchidos"});
    };

    const user = await prisma.usuario.findFirst({
      where: {
        user_id
      }
    });

    if (!user) {
      return res.status(StatusCodes.NOT_FOUND).send({ message: "Usuário e/ou senha incorretos"});
    };

    if (user && bcrypt.compareSync(senha, user.senha)) {
      const token = jwt.sign({
        id_usuario: user.id_usuario,
        tipo_user: tipo_user,
        email: user.email,
        nome: user.nome,
        userimg: user.userimg
      },
      String(process.env.TOKEN_KEY),
      {
        expiresIn: "8h"
      } 
      )
      return res.status(StatusCodes.OK).send({ token });
    } else {
      return res.status(StatusCodes.UNAUTHORIZED).send({ message: "Usuário e/ou senha estão incorretos" });
    };

  } catch (error) {
    console.log(error);
    return res.status(StatusCodes.BAD_REQUEST).send(error);
  };
};

export const logout = (req: Request, res: Response) => {
  // Limpar o token armazenado no navegador
  res.clearCookie('token'); 
  // localStorage.removeItem('token'); // Se estiver usando armazenamento local (localStorage)
  return res.status(StatusCodes.OK).send({ message: 'Logout realizado com sucesso' });
};
