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
exports.AvaliacoesController = void 0;
const avaliacoes_validation_1 = require("../../validations/avaliacoes.validation");
const http_status_codes_1 = require("http-status-codes");
const AvaliacoesRepository_1 = __importDefault(require("../repositories/AvaliacoesRepository"));
exports.AvaliacoesController = {
    createAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield avaliacoes_validation_1.avaliacoesValidation.validate(req.body);
                const avaliacoes = yield AvaliacoesRepository_1.default.create(req.body);
                res.status(http_status_codes_1.StatusCodes.CREATED).send(avaliacoes);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
            ;
        });
    },
    getAllAvaliacoes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const avaliacoes = yield AvaliacoesRepository_1.default.getAll();
                res.status(http_status_codes_1.StatusCodes.OK).send(avaliacoes);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
            ;
        });
    },
    getAvaliacoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const avaliacao = yield AvaliacoesRepository_1.default.getById(Number(req.params.id));
                if (!avaliacao) {
                    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Avaliação não encontrada");
                    return;
                }
                res.status(http_status_codes_1.StatusCodes.OK).send(avaliacao);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
        });
    },
    updateAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const avaliacao = yield AvaliacoesRepository_1.default.updateAvaliacao(Number(req.params.id), req.body);
                res.status(http_status_codes_1.StatusCodes.OK).send(avaliacao);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
        });
    },
    deleteAvaliacao(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield AvaliacoesRepository_1.default.deleteAvaliacao(Number(req.params.id));
                res.status(http_status_codes_1.StatusCodes.OK).send('Avaliação excluida com sucesso!');
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
        });
    }
};
