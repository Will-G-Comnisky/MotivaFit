"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../database/prisma");
class AlunoRepository {
    constructor() {
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.aluno.create({
                data,
                select: {
                    id_aluno: true,
                    data_nasc: true,
                    altura: true,
                    xp: true,
                    nivel: true,
                    id_usuario: true,
                    id_admin: true,
                }
            });
            return user;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const alunos = yield prisma_1.prisma.aluno.findMany({
                include: {
                    admin: true,
                    usuario: {
                        include: {
                            endereco: true
                        }
                    },
                }
            });
            return alunos;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const aluno = yield prisma_1.prisma.aluno.findUnique({
                where: {
                    id_aluno: id
                },
                include: {
                    admin: true,
                    usuario: {
                        include: {
                            endereco: true
                        }
                    },
                }
            });
            return aluno;
        });
        this.updateUser = (id, data) => __awaiter(this, void 0, void 0, function* () {
            const aluno = yield prisma_1.prisma.aluno.update({
                where: {
                    id_aluno: id
                },
                data,
                include: {
                    admin: true,
                    usuario: {
                        include: {
                            endereco: true
                        }
                    },
                }
            });
            return aluno;
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prisma.aluno.delete({
                where: {
                    id_aluno: id
                },
            });
            return;
        });
        this.getAllAlunosByAdminId = (adminId) => __awaiter(this, void 0, void 0, function* () {
            const alunos = yield prisma_1.prisma.aluno.findMany({
                where: {
                    id_admin: adminId,
                    usuario: {
                        tipo_user: {
                            in: ["aluno"] // Filtra os usuários do tipo "aluno"
                        }
                    }
                },
                include: {
                    usuario: true,
                    plano: true
                }
            });
            return alunos;
        });
        /*
          // obter os dados do próprio aluno
          getOwnUserData = async (alunoId: number) => {
            const aluno = await prisma.aluno.findUnique({
              where: {
                id_aluno: alunoId
              },
              include: {
                admin: true,
                usuario: {
                  include: {
                    endereco: true
                  }
                },
              }
            });
            return aluno;
          }
          
          // Atualizar os dados do próprio aluno
          updateOwnUserData = async (alunoId: number, data: Aluno) => {
            const updatedAluno = await prisma.aluno.update({
              where: {
                id_aluno: alunoId
              },
              data,
              include: {
                admin: true,
                usuario: {
                  include: {
                    endereco: true
                  }
                },
              }
            });
            return updatedAluno;
          }
          */
    }
}
;
exports.default = new AlunoRepository();
