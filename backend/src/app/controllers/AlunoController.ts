import { alunoValidation } from "../../validations/aluno.validation"
import { StatusCodes } from 'http-status-codes'
import { Request, Response } from 'express';
import AlunoRepository from '../repositories/AlunoRepository';


export const AlunoController = {
  async createAluno(req: Request, res: Response) {
    try {
      await alunoValidation.validate(req.body);

      // Obter ID do usuário a partir dos dados da requisição
      const idUsuario = req.body.id_usuario;
      const idAdmin = req.body.id_admin;
      const dataNasc = req.body.data_nasc;
      const altura = req.body.altura;
      const xp = req.body.xp;
      const nivel = req.body.nivel;

      // Verifique se possui todos os dados e retorna mensagem caso não
      if (!idUsuario) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: "ID do usuário é obrigatório" });
      }
      if (!idAdmin) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: "ID do administrador é obrigatório" });
      }
      if (!dataNasc) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: "Data de nascimento é obrigatória" });
      }
      if (!altura) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: "Altura é obrigatória" });
      }
      if (!xp) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: "Experiência deve ser 0 ou mais" });
      }
      if (!nivel) {
        return res.status(StatusCodes.BAD_REQUEST).send({ message: "O nível deve ser 1 ou mais" });
      }

      const aluno = await AlunoRepository.create(req.body);

      res.status(StatusCodes.CREATED).send(aluno);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error);    
    }
  },

  async getAllAlunos(req: Request, res: Response): Promise<void> {
    try {
      const alunos = await AlunoRepository.getAll();
      res.status(StatusCodes.OK).send(alunos);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async getUserById(req: Request, res: Response): Promise<void> {
    try {
      const aluno = await AlunoRepository.getById(Number(req.params.id));

      if (!aluno) {
        res.status(StatusCodes.NOT_FOUND).send("Aluno não encontrado");
        return;
      }

      res.status(StatusCodes.OK).send(aluno);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async updateAluno(req: Request, res: Response): Promise<void> {
    try {
      const aluno = await AlunoRepository.updateUser(Number(req.params.id), req.body);
      res.status(StatusCodes.OK).send(aluno);
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error); 
    }
  },

  async deleteAluno(req: Request, res: Response): Promise<void> {
    try {
      await AlunoRepository.deleteUser(Number(req.params.id));
      res.status(StatusCodes.OK).send('Aluno removido com sucesso!')
    } catch (error) {
      res.status(StatusCodes.BAD_REQUEST).send(error);
    }
  },

  async getAllAlunosByAdminId(req: Request, res: Response) {
    try {
      const adminId = Number(req.params.adminId); // adminId deve ser passado como parâmetro na rota
      const alunos = await AlunoRepository.getAllAlunosByAdminId(adminId);
      res.status(StatusCodes.OK).json(alunos);
    } catch (error) {
      console.error('Erro ao buscar alunos:', error);
      res.status(StatusCodes.INTERNAL_SERVER_ERROR).send('Erro ao buscar alunos');
    }
  },
};

