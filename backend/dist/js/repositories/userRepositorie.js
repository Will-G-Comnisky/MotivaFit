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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = __importDefault(require("../prisma/prisma"));
class UserRepository {
    getAllUsers() {
        return __awaiter(this, void 0, void 0, function* () {
            // Aqui, a função findMany() deve ser chamada no modelo 'usuario' (nome definido no schema),
            // não em 'user'. Verifique se o nome do modelo no schema corresponde ao que está sendo usado aqui.
            return prisma_1.default.usuario.findMany();
        });
    }
    getUserById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.default.aluno.findUnique({
                where: { id_aluno: id },
                include: { usuario: { include: { endereco: true } } }
                // Corrigido para usar o identificador correto
            });
        });
    }
}
exports.default = UserRepository;
