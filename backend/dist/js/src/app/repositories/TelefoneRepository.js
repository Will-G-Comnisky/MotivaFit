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
class TelefoneRepository {
    constructor() {
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            const telefone = yield prisma_1.prisma.telefone.create({
                data,
                select: {
                    id_telefone: true,
                    ddd: true,
                    numero: true,
                    id_usuario: true,
                }
            });
            return telefone;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const telefones = yield prisma_1.prisma.telefone.findMany({
                select: {
                    id_telefone: true,
                    ddd: true,
                    numero: true,
                    id_usuario: true
                }
            });
            return telefones;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const telefone = yield prisma_1.prisma.telefone.findUnique({
                select: {
                    id_telefone: true,
                    ddd: true,
                    numero: true,
                    id_usuario: true
                },
                where: {
                    id_telefone: id
                }
            });
            return telefone;
        });
        this.updateTelefone = (id, data) => __awaiter(this, void 0, void 0, function* () {
            const telefone = yield prisma_1.prisma.telefone.update({
                where: {
                    id_telefone: id
                },
                data,
                select: {
                    id_telefone: true,
                    ddd: true,
                    numero: true,
                    id_usuario: true
                }
            });
            return telefone;
        });
        this.deleteTelefone = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prisma.telefone.delete({
                where: {
                    id_telefone: id
                },
            });
            return;
        });
        this.getTelefoneByUserId = (userId) => __awaiter(this, void 0, void 0, function* () {
            const telefones = yield prisma_1.prisma.telefone.findMany({
                where: {
                    id_usuario: userId
                },
                select: {
                    id_telefone: true,
                    ddd: true,
                    numero: true,
                    id_usuario: true
                }
            });
            return telefones;
        });
    }
}
;
exports.default = new TelefoneRepository();
