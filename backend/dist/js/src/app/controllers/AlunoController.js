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
exports.AlunoController = void 0;
const aluno_validation_1 = require("../../validations/aluno.validation");
const http_status_codes_1 = require("http-status-codes");
const AlunoRepository_1 = __importDefault(require("../repositories/AlunoRepository"));
exports.AlunoController = {
    createAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield aluno_validation_1.alunoValidation.validate(req.body);
                // Obter ID do usuário a partir dos dados da requisição
                const idUsuario = req.body.id_usuario;
                const idAdmin = req.body.id_admin;
                const dataNasc = req.body.data_nasc;
                const altura = req.body.altura;
                const xp = req.body.xp;
                const nivel = req.body.nivel;
                // Verifique se possui todos os dados e retorna mensagem caso não
                if (!idUsuario) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "ID do usuário é obrigatório" });
                }
                if (!idAdmin) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "ID do administrador é obrigatório" });
                }
                if (!dataNasc) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "Data de nascimento é obrigatória" });
                }
                if (!altura) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "Altura é obrigatória" });
                }
                if (!xp) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "Experiência deve ser 0 ou mais" });
                }
                if (!nivel) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "O nível deve ser 1 ou mais" });
                }
                const aluno = yield AlunoRepository_1.default.create(req.body);
                res.status(http_status_codes_1.StatusCodes.CREATED).send(aluno);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    getAllAlunos(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const alunos = yield AlunoRepository_1.default.getAll();
                res.status(http_status_codes_1.StatusCodes.OK).send(alunos);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const aluno = yield AlunoRepository_1.default.getById(Number(req.params.id));
                if (!aluno) {
                    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Aluno não encontrado");
                    return;
                }
                res.status(http_status_codes_1.StatusCodes.OK).send(aluno);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    updateAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const aluno = yield AlunoRepository_1.default.updateUser(Number(req.params.id), req.body);
                res.status(http_status_codes_1.StatusCodes.OK).send(aluno);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    deleteAluno(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield AlunoRepository_1.default.deleteUser(Number(req.params.id));
                res.status(http_status_codes_1.StatusCodes.OK).send('Aluno removido com sucesso!');
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    getAllAlunosByAdminId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const adminId = Number(req.params.adminId); // adminId deve ser passado como parâmetro na rota
                const alunos = yield AlunoRepository_1.default.getAllAlunosByAdminId(adminId);
                res.status(http_status_codes_1.StatusCodes.OK).json(alunos);
            }
            catch (error) {
                console.error('Erro ao buscar alunos:', error);
                res.status(http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR).send('Erro ao buscar alunos');
            }
        });
    },
};
