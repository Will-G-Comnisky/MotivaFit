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
Object.defineProperty(exports, "__esModule", { value: true });
const prisma_1 = require("../database/prisma");
class AvaliacoesRepository {
    constructor() {
        this.create = (data) => __awaiter(this, void 0, void 0, function* () {
            const avaliacao = yield prisma_1.prisma.avaliacao.create({
                data,
                select: {
                    id_avaliacao: true,
                    descricao: true,
                    id_admin: true,
                    id_aluno: true,
                    peso: true,
                    medida_braco_dir_rlx: true,
                    medida_braco_esq_rlx: true,
                    medida_antebraco_esq: true,
                    medida_antebraco_dir: true,
                    medida_escapular: true,
                    medida_torax: true,
                    medida_cintura: true,
                    medida_abdomen: true,
                    medida_quadril: true,
                    medida_coxa_esq: true,
                    medida_coxa_dir: true,
                    medida_panturrilha_esq: true,
                    medida_panturrilha_dir: true,
                    dobras_triceps: true,
                    dobras_sub_escapular: true,
                    dobras_peitoral: true,
                    dobras_med_axilar: true,
                    dobras_supra_iliaca: true,
                    dobras_abdomen: true,
                    dobras_coxa: true,
                    data_avaliacao: true,
                }
            });
            return avaliacao;
        });
        this.getAll = () => __awaiter(this, void 0, void 0, function* () {
            const avaliacoes = yield prisma_1.prisma.avaliacao.findMany({
                include: {
                    admin: true,
                    aluno: {
                        include: {
                            usuario: true,
                        }
                    }
                }
            });
            return avaliacoes;
        });
        this.getById = (id) => __awaiter(this, void 0, void 0, function* () {
            const avaliacao = yield prisma_1.prisma.avaliacao.findUnique({
                where: {
                    id_avaliacao: id
                },
                include: {
                    admin: true,
                    aluno: {
                        include: {
                            usuario: true,
                        }
                    }
                }
            });
            return avaliacao;
        });
        this.updateAvaliacao = (id, data) => __awaiter(this, void 0, void 0, function* () {
            const avaliacao = yield prisma_1.prisma.avaliacao.update({
                where: {
                    id_avaliacao: id
                },
                data,
                include: {
                    admin: true,
                    aluno: {
                        include: {
                            usuario: true,
                        }
                    }
                }
            });
            return avaliacao;
        });
        this.deleteAvaliacao = (id) => __awaiter(this, void 0, void 0, function* () {
            yield prisma_1.prisma.avaliacao.delete({
                where: {
                    id_avaliacao: id
                },
            });
            return;
        });
    }
}
;
exports.default = new AvaliacoesRepository();
