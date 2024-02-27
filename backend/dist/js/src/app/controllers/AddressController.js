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
exports.AddressController = void 0;
const http_status_codes_1 = require("http-status-codes");
const AddressRepository_1 = __importDefault(require("../repositories/AddressRepository"));
const address_validation_1 = require("../../validations/address.validation");
exports.AddressController = {
    createAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield address_validation_1.addressValidation.validate(req.body);
                const address = yield AddressRepository_1.default.create(req.body);
                res.status(http_status_codes_1.StatusCodes.CREATED).send(address);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send({ message: error });
            }
        });
    },
    getAllAddresses(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const addresses = yield AddressRepository_1.default.getAll();
                res.status(http_status_codes_1.StatusCodes.OK).send(addresses);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    getAddressById(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const address = yield AddressRepository_1.default.getById(Number(req.params.id));
                if (!address) {
                    res.status(http_status_codes_1.StatusCodes.NOT_FOUND).send("Endereço não encontrado");
                    return;
                }
                res.status(http_status_codes_1.StatusCodes.OK).send(address);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    updateAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const address = yield AddressRepository_1.default.updateAddress(Number(req.params.id), req.body);
                res.status(http_status_codes_1.StatusCodes.OK).send(address);
            }
            catch (error) {
                res.status(http_status_codes_1.StatusCodes.BAD_REQUEST).send(error);
            }
        });
    },
    deleteAddress(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield AddressRepository_1.default.deleteAddress(Number(req.params.id));
                res.status(http_status_codes_1.StatusCodes.OK).send('Endereço deletado com sucesso!');
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
