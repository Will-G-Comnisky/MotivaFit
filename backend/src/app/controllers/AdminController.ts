import { adminValidation } from "../../validations/admin.validation"
import { StatusCodes } from 'http-status-codes'
import { Request, Response } from 'express';
import AdminRepository from '../repositories/AdminRepository';


export const AdminController = {
  async createAdmin(req: Request, res: Response) {
    try {
      await adminValidation.validate(req.body);

      // Obter ID do usuário a partir dos dados da requisição
      const idUsuario = req.body.id_usuario;

      // Verifique se possui todos os dados e retorna mensagem caso não
      if (!idUsuario) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: "ID do usuário é obrigatório" });
      }

      const admin = await AdminRepository.create(req.body);

      res.status(StatusCodes.CREATED).send(admin);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error);    
    }
  },

  async getAllAdmins(req: Request, res: Response): Promise<void> {
    try {
      const admins = await AdminRepository.getAll();
      res.status(StatusCodes.OK).send(admins);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },


  async getAdminById(req: Request, res: Response): Promise<void> {
    try {
      const admin = await AdminRepository.getById(Number(req.params.id));

      if (!admin) {
        res.status(StatusCodes.NOT_FOUND).send("Administrador não encontrado");
        return;
      }

      res.status(StatusCodes.OK).send(admin);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async updateAdmin(req: Request, res: Response): Promise<void> {
    try {
      const admin = await AdminRepository.updateAdmin(Number(req.params.id), req.body);
      res.status(StatusCodes.OK).send(admin);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async deleteAdmin(req: Request, res: Response): Promise<void> {
    try {
      await AdminRepository.deleteAdmin(Number(req.params.id));
      res.status(StatusCodes.OK).send('Administrador removido com sucesso!')
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error);
    }
  }
}

