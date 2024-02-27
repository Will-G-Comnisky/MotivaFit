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
exports.PlanoController = void 0;
const plano_validation_1 = require("../../validations/plano.validation");
const http_status_codes_1 = require("http-status-codes");
const PlanoRepository_1 = __importDefault(require("../repositories/PlanoRepository"));
exports.PlanoController = {
    createPlano(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield plano_validation_1.planoValidation.validate(req.body);
                const plano = yield PlanoRepository_1.default.create(req.body);
                res.status(http_status_codes_1.StatusCodes.CREATED).send(plano);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: `Erro ao criar o plano: ${error}` });
            }
            ;
        });
    },
    getAllPlanos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const planos = yield PlanoRepository_1.default.getAll();
                res.status(http_status_codes_1.StatusCodes.OK).send(planos);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: `Erro ao consultar todos os planos: ${error}` });
            }
        });
    },
    getPlanoById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const plano = yield PlanoRepository_1.default.getById(Number(req.params.id));
                if (!plano) {
                    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Plano não encontrado");
                    return;
                }
                res.status(http_status_codes_1.StatusCodes.OK).send(plano);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: `Erro ao consultar este plano: ${error}` });
            }
        });
    },
    updatePlano(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const plano = yield PlanoRepository_1.default.updatePlano(Number(req.params.id), req.body);
                res.status(http_status_codes_1.StatusCodes.OK).send(plano);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: `Erro ao atualizar este plano: ${error}` });
            }
        });
    },
    deletePlano(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield PlanoRepository_1.default.deletePlano(Number(req.params.id));
                res.status(http_status_codes_1.StatusCodes.OK).send('Plano excluido com sucesso!');
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: `Erro ao excluir este plano: ${error}` });
            }
            ;
        });
    },
};
