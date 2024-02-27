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
class AddressRepository {
    constructor() {
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            const adress = yield prisma_1.prisma.endereco.create({
                data,
                select: {
                    id_endereco: true,
                    cep: true,
                    cidade: true,
                    estado: true,
                    uf: true,
                    bairro: false,
                    endereco: false,
                    numero: false,
                    complemento: false
                }
            });
            return adress;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const adresses = yield prisma_1.prisma.endereco.findMany({
                select: {
                    id_endereco: true,
                    cep: true,
                    cidade: true,
                    estado: true,
                    uf: true,
                    bairro: false,
                    endereco: false,
                    numero: false,
                    complemento: false
                },
            });
            return adresses;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const adress = yield prisma_1.prisma.endereco.findUnique({
                select: {
                    id_endereco: true,
                    cep: true,
                    cidade: true,
                    estado: true,
                    uf: true,
                    bairro: false,
                    endereco: false,
                    numero: false,
                    complemento: false
                },
                where: {
                    id_endereco: id
                }
            });
            return adress;
        });
        this.updateAddress = (id, data) => __awaiter(this, void 0, void 0, function* () {
            const adress = yield prisma_1.prisma.endereco.update({
                where: {
                    id_endereco: id
                },
                data,
                select: {
                    id_endereco: true,
                    cep: true,
                    cidade: true,
                    estado: true,
                    uf: true,
                    bairro: false,
                    endereco: false,
                    numero: false,
                    complemento: false
                },
            });
            return adress;
        });
        this.deleteAddress = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prisma.endereco.delete({
                where: {
                    id_endereco: id
                },
            });
            return;
        });
    }
}
;
exports.default = new AddressRepository();
