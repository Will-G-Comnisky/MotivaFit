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
class UserRepository {
    constructor() {
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.usuario.create({
                data,
                select: {
                    id_usuario: true,
                    user_id: true,
                    tipo_user: true,
                    senha: false,
                    cpf: true,
                    email: true,
                    nome: true,
                    id_endereco: true,
                    userimg: true
                }
            });
            return user;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const users = yield prisma_1.prisma.usuario.findMany({
                select: {
                    id_usuario: true,
                    user_id: true,
                    tipo_user: true,
                    senha: false,
                    cpf: true,
                    email: true,
                    nome: true,
                    id_endereco: true,
                    userimg: true
                },
            });
            return users;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.usuario.findUnique({
                select: {
                    id_usuario: true,
                    user_id: true,
                    tipo_user: true,
                    senha: false,
                    cpf: true,
                    email: true,
                    nome: true,
                    id_endereco: true,
                    userimg: true
                },
                where: {
                    id_usuario: id
                }
            });
            return user;
        });
        this.updateUser = (id, data) => __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.usuario.update({
                where: {
                    id_usuario: id
                },
                data,
                select: {
                    id_usuario: true,
                    user_id: true,
                    tipo_user: true,
                    senha: false,
                    cpf: true,
                    email: true,
                    nome: true,
                    id_endereco: true,
                    userimg: true
                },
            });
            return user;
        });
        this.deleteUser = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prisma.usuario.delete({
                where: {
                    id_usuario: id
                },
            });
            return;
        });
        this.findByCpf = (cpf) => __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.usuario.findFirst({
                where: {
                    OR: [
                        { cpf: cpf },
                    ],
                },
            });
            return user;
        });
        this.findByEmail = (email) => __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.usuario.findFirst({
                where: {
                    OR: [
                        { email: email },
                    ],
                },
            });
            return user;
        });
        this.findByUserId = (user_id) => __awaiter(this, void 0, void 0, function* () {
            const user = yield prisma_1.prisma.usuario.findFirst({
                where: {
                    OR: [
                        { user_id: user_id },
                    ],
                },
            });
            return user;
        });
    }
}
;
exports.default = new UserRepository();
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
