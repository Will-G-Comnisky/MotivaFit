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
class PlanoRepository {
    constructor() {
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            const plano = yield prisma_1.prisma.plano.create({
                data,
                select: {
                    id_plano: true,
                    tipo_plano: true,
                    valor: true,
                    id_admin: true,
                    id_aluno: true,
                    data_inicio: true,
                    data_termino: true,
                    recursivo: true,
                    qtd_recursivo: true
                }
            });
            return plano;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const planos = yield prisma_1.prisma.plano.findMany({
                include: {
                    admin: {
                        include: {
                            usuario: true
                        }
                    },
                    aluno: {
                        include: {
                            usuario: true,
                        }
                    }
                }
            });
            return planos;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const plano = yield prisma_1.prisma.plano.findUnique({
                where: {
                    id_plano: id,
                },
                include: {
                    admin: true,
                    aluno: {
                        include: {
                            usuario: true,
                        }
                    }
                },
            });
            return plano;
        });
        this.updatePlano = (id, data) => __awaiter(this, void 0, void 0, function* () {
            const plano = yield prisma_1.prisma.plano.update({
                where: {
                    id_plano: id
                },
                data,
                select: {
                    id_plano: true,
                    tipo_plano: true,
                    valor: true,
                    id_admin: true,
                    id_aluno: true,
                    data_inicio: true,
                    data_termino: true,
                    recursivo: true,
                    qtd_recursivo: true
                },
            });
            return plano;
        });
        this.deletePlano = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prisma.plano.delete({
                where: {
                    id_plano: id
                },
            });
            return;
        });
    }
}
;
exports.default = new PlanoRepository();
/*
export const userRepository = {

  async createUser(data: usuario): Promise<usuario> {
    return prisma.usuario.create({ data });
  },

  async getUsers(): Promise<usuario[]> {
    return prisma.usuario.findMany();
  },

  async getUsersById(id: number): Promise<usuario | null> {
    return await prisma.usuario.findUnique({
      where: { id_usuario: id },
    });
  },

  async updateUser(id: number, data: Partial<usuario>): Promise<usuario | null> {
    return prisma.usuario.update({
      where: { id_usuario: id},
      data,
    });
  },

  async deleteUser(id: number): Promise<usuario | null> {
    return prisma.usuario.delete({
      where: {id_usuario: id},
    });
  },
}
*/
