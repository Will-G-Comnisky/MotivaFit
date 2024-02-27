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
exports.logout = exports.authenticate = void 0;
const prisma_1 = require("../database/prisma");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const http_status_codes_1 = require("http-status-codes");
const bcrypt_1 = __importDefault(require("bcrypt"));
const authenticate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_id, senha } = req.body;
        if (!(user_id && senha)) {
            return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "Usuário e senha devem ser preenchidos" });
        }
        ;
        const user = yield prisma_1.prisma.usuario.findFirst({
            where: {
                user_id
            }
        });
        if (!user) {
            return res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send({ message: "Usuário e/ou senha incorretos" });
        }
        ;
        if (user && bcrypt_1.default.compareSync(senha, user.senha)) {
            console.log(`O tipo user é: ${user.tipo_user}`);
            const token = jsonwebtoken_1.default.sign({
                id_usuario: user.id_usuario,
                tipo_user: user.tipo_user
            }, String(process.env.TOKEN_KEY), {
                expiresIn: "8h"
            });
            return res.status(http_status_codes_1.StatusCodes.OK).send({ token });
        }
        else {
            return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send({ message: "Usuário e/ou senha estão incorretos" });
        }
        ;
    }
    catch (error) {
        console.log(error);
        return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
    }
    ;
});
exports.authenticate = authenticate;
const logout = (req, res) => {
    // Limpar o token armazenado no navegador
    res.clearCookie('token');
    // localStorage.removeItem('token'); // Se estiver usando armazenamento local (localStorage)
    return res.status(http_status_codes_1.StatusCodes.OK).send({ message: 'Logout realizado com sucesso' });
};
exports.logout = logout;
