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
exports.UserController = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_validation_1 = require("../../validations/user.validation");
const http_status_codes_1 = require("http-status-codes");
const UserRepository_1 = __importDefault(require("../repositories/UserRepository"));
exports.UserController = {
    createUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield user_validation_1.userValidation.validate(req.body);
                const senhaHash = yield bcrypt_1.default.hash(req.body.senha, 10);
                req.body.senha = senhaHash;
                const user = yield UserRepository_1.default.create(req.body);
                res.status(http_status_codes_1.StatusCodes.CREATED).send(user);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    getAllUsers(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const users = yield UserRepository_1.default.getAll();
                res.status(http_status_codes_1.StatusCodes.OK).send(users);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    getUserById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserRepository_1.default.getById(Number(req.params.id));
                if (!user) {
                    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Usuário não encontrado");
                    return;
                }
                res.status(http_status_codes_1.StatusCodes.OK).send(user);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    updateUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const user = yield UserRepository_1.default.updateUser(Number(req.params.id), req.body);
                res.status(http_status_codes_1.StatusCodes.OK).send(user);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    deleteUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield UserRepository_1.default.deleteUser(Number(req.params.id));
                res.status(http_status_codes_1.StatusCodes.OK).send('Usuário removido com sucesso!');
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    }
};
/*
  async getUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await UserRepository.getUsers();
      res.json(users);
    } catch (error) {
      res.status(StatusCodes.BAD_GATEWAY).json({ error: 'Erro ao consultar usuários'});
    }
  },

  async getUsersById(req: Request, res: Response): Promise<void> {
    
  }
*/
