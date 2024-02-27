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
class AdminRepository {
    constructor() {
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            const admin = yield prisma_1.prisma.admin.create({
                data,
                include: {
                    usuario: {
                        include: {
                            endereco: true
                        }
                    },
                }
            });
            return admin;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const admins = yield prisma_1.prisma.admin.findMany({
                include: {
                    usuario: {
                        include: {
                            endereco: true
                        }
                    },
                }
            });
            return admins;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const admin = yield prisma_1.prisma.admin.findUnique({
                where: {
                    id_admin: id
                },
                include: {
                    usuario: {
                        include: {
                            endereco: true
                        }
                    },
                }
            });
            return admin;
        });
        this.updateAdmin = (id, data) => __awaiter(this, void 0, void 0, function* () {
            const admin = yield prisma_1.prisma.admin.update({
                where: {
                    id_admin: id
                },
                data,
                include: {
                    usuario: {
                        include: {
                            endereco: true
                        }
                    },
                }
            });
            return admin;
        });
        this.deleteAdmin = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prisma.admin.delete({
                where: {
                    id_admin: id,
                },
            });
            return;
        });
    }
}
;
exports.default = new AdminRepository();
