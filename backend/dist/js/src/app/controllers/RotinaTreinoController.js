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
exports.Controller = void 0;
const http_status_codes_1 = require("http-status-codes");
const RotinaTreinoRepository_1 = __importDefault(require("../repositories/RotinaTreinoRepository"));
class Controller {
    static getExercicio(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const treinoid = parseInt(req.params.id);
            try {
                const treino = yield RotinaTreinoRepository_1.default.getExercicioById(treinoid);
                res.status(http_status_codes_1.StatusCodes.OK).send(treino);
            }
            catch (error) {
                console.error('Erro ao buscar treino:', error);
                res.status(http_status_codes_1.StatusCodes.BAD_GATEWAY).send({ error: 'Erro ao buscar treino' });
            }
        });
    }
    static getExercicios(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const exercicios = yield RotinaTreinoRepository_1.default.getExercicios();
                res.json(exercicios);
            }
            catch (error) {
                console.error('Erro ao buscar exercicios:', error);
                res.status(500).json({ error: 'Erro ao buscar exercicios' });
            }
        });
    }
    static getTreino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const treinoid = parseInt(req.params.id);
            try {
                const treino = yield RotinaTreinoRepository_1.default.getTreino(treinoid);
                res.json(treino);
            }
            catch (error) {
                console.error('Erro ao buscar treino:', error);
                res.status(500).json({ error: 'Erro ao buscar treino' });
            }
        });
    }
    static createTreino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, exercicios } = req.body;
            try {
                yield RotinaTreinoRepository_1.default.createTreino(nome, exercicios);
                res.status(http_status_codes_1.StatusCodes.CREATED).send({ 'message': 'Treino criado com sucesso' });
            }
            catch (error) {
                console.error('Erro ao criar treino:', error);
                res.status(500).json({ error: 'Erro ao criar treino' });
            }
        });
    }
    static putTreino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome, exercicios } = req.body;
            try {
                yield RotinaTreinoRepository_1.default.putTreino(id, nome, exercicios);
                res.status(http_status_codes_1.StatusCodes.ACCEPTED).send({ 'message': 'Treino atualizado com sucesso' });
            }
            catch (error) {
                console.error('Erro ao atualizar treino:', error);
                res.status(500).json({ error: 'Erro ao atualizar treino' });
            }
        });
    }
    static deleteTreino(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                yield RotinaTreinoRepository_1.default.deleteTreino(id);
                res.status(http_status_codes_1.StatusCodes.ACCEPTED).send({ 'message': 'Treino deletado com sucesso' });
            }
            catch (error) {
                console.error('Erro ao deletar treino:', error);
                res.status(500).json({ error: 'Erro ao deletar treino' });
            }
        });
    }
    // Rotina de treino
    static getRotina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const treinoid = parseInt(req.params.id);
            try {
                const treino = yield RotinaTreinoRepository_1.default.getRotina(treinoid);
                res.json(treino);
            }
            catch (error) {
                console.error('Erro ao buscar treino:', error);
                res.status(500).json({ error: 'Erro ao buscar treino' });
            }
        });
    }
    static createRotina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { nome, usuario, treinos } = req.body;
            console.log(nome, usuario, treinos);
            try {
                yield RotinaTreinoRepository_1.default.createRotina(nome, usuario, treinos);
                res.status(http_status_codes_1.StatusCodes.CREATED).send({ 'message': 'Rotina criada com sucesso' });
            }
            catch (error) {
                console.error('Erro ao criar rotina:', error);
                res.status(500).json({ error: 'Erro ao criar rotina' });
            }
        });
    }
    static putRotina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id, nome, usuario, treinos } = req.body;
            try {
                yield RotinaTreinoRepository_1.default.putRotina(id, nome, usuario, treinos);
                res.status(http_status_codes_1.StatusCodes.ACCEPTED).send({ 'message': 'Rotina atualizada com sucesso' });
            }
            catch (error) {
                console.error('Erro ao atualizar rotina:', error);
                res.status(500).json({ error: 'Erro ao atualizar rotina' });
            }
        });
    }
    static deleteRotina(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const id = parseInt(req.params.id);
            try {
                yield RotinaTreinoRepository_1.default.deleteRotina(id);
                res.status(http_status_codes_1.StatusCodes.ACCEPTED).send({ 'message': 'Rotina deletada com sucesso' });
            }
            catch (error) {
                console.error('Erro ao deletar rotina:', error);
                res.status(500).json({ error: 'Erro ao deletar rotina' });
            }
        });
    }
}
exports.Controller = Controller;
