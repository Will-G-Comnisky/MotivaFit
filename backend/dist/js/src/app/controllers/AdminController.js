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
exports.AdminController = void 0;
const admin_validation_1 = require("../../validations/admin.validation");
const http_status_codes_1 = require("http-status-codes");
const AdminRepository_1 = __importDefault(require("../repositories/AdminRepository"));
exports.AdminController = {
    createAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield admin_validation_1.adminValidation.validate(req.body);
                // Obter ID do usuário a partir dos dados da requisição
                const idUsuario = req.body.id_usuario;
                // Verifique se possui todos os dados e retorna mensagem caso não
                if (!idUsuario) {
                    return res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: "ID do usuário é obrigatório" });
                }
                const admin = yield AdminRepository_1.default.create(req.body);
                res.status(http_status_codes_1.StatusCodes.CREATED).send(admin);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    getAllAdmins(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admins = yield AdminRepository_1.default.getAll();
                res.status(http_status_codes_1.StatusCodes.OK).send(admins);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    getAdminById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield AdminRepository_1.default.getById(Number(req.params.id));
                if (!admin) {
                    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Administrador não encontrado");
                    return;
                }
                res.status(http_status_codes_1.StatusCodes.OK).send(admin);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    updateAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const admin = yield AdminRepository_1.default.updateAdmin(Number(req.params.id), req.body);
                res.status(http_status_codes_1.StatusCodes.OK).send(admin);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    deleteAdmin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield AdminRepository_1.default.deleteAdmin(Number(req.params.id));
                res.status(http_status_codes_1.StatusCodes.OK).send('Administrador removido com sucesso!');
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    }
};
