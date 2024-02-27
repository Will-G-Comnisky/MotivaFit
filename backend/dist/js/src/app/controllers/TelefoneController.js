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
exports.TelefoneController = void 0;
const http_status_codes_1 = require("http-status-codes");
const TelefoneRepository_1 = __importDefault(require("../repositories/TelefoneRepository"));
const telefone_validation_1 = require("../../validations/telefone.validation");
exports.TelefoneController = {
    createTelefone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield telefone_validation_1.telefoneValidation.validate(req.body);
                const telefone = yield TelefoneRepository_1.default.create(req.body);
                res.status(http_status_codes_1.StatusCodes.CREATED).send(telefone);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: 'Erro em TelefoneController na função createTelefone', error });
            }
        });
    },
    getAllTelefones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const telefones = yield TelefoneRepository_1.default.getAll();
                res.status(http_status_codes_1.StatusCodes.OK).send(telefones);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
        });
    },
    getTelefoneById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const telefone = yield TelefoneRepository_1.default.getById(Number(req.params.id));
                if (!telefone) {
                    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Endereço não encontrado");
                    return;
                }
                res.status(http_status_codes_1.StatusCodes.OK).send(telefone);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
        });
    },
    updateTelefone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const telefone = yield TelefoneRepository_1.default.updateTelefone(Number(req.params.id), req.body);
                res.status(http_status_codes_1.StatusCodes.OK).send(telefone);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
        });
    },
    deleteTelefone(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield TelefoneRepository_1.default.deleteTelefone(Number(req.params.id));
                res.status(http_status_codes_1.StatusCodes.OK).send('Telefone deletado com sucesso');
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
        });
    },
    getTelefonesByUserId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const userId = parseInt(req.params.userId); // Captura o id_usuario dos parâmetros da rota
                const telefones = yield TelefoneRepository_1.default.getTelefoneByUserId(userId);
                res.status(http_status_codes_1.StatusCodes.OK).send(telefones);
            }
            catch (error) {
                console.error('Erro ao buscar telefones por id_usuario:', error);
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send({ message: 'Erro ao buscar telefones por id_usuario.' });
            }
        });
    },
};
