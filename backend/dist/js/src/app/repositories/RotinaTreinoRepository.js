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
class RotinaTreino {
    getExercicioById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.exercicio.findUnique({
                where: { id_exercicio: id }
            });
        });
    }
    getExercicios() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.exercicio.findMany();
        });
    }
    getTreino(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.treino.findUnique({
                where: { id_treino: id },
                include: { treino_exercicio: { include: { exercicio: true } } }
            });
        });
    }
    createTreino(nome, exercicios) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdTreino = yield prisma_1.prisma.treino.create({
                data: {
                    // Add the id_treino property
                    nome: nome,
                    treino_exercicio: {
                        create: exercicios.map(exercicio => ({
                            qtd_serie: exercicio.qtd_serie,
                            qtd_rep: exercicio.qtd_rep,
                            qtd_carga: exercicio.qtd_carga,
                            comentario: exercicio.comentario,
                            exercicio: { connect: { id_exercicio: exercicio.id_exercicio } }
                        }))
                    }
                },
                include: {
                    treino_exercicio: { include: { exercicio: true } }
                }
            });
            return createdTreino;
        });
    }
    putTreino(id, nome, exercicios) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedTreino = yield prisma_1.prisma.treino.update({
                where: { id_treino: id },
                data: {
                    nome: nome,
                    treino_exercicio: {
                        deleteMany: {},
                        create: exercicios.map(exercicio => ({
                            qtd_serie: exercicio.qtd_serie,
                            qtd_rep: exercicio.qtd_rep,
                            qtd_carga: exercicio.qtd_carga,
                            comentario: exercicio.comentario,
                            exercicio: { connect: { id_exercicio: exercicio.id_exercicio } }
                        }))
                    }
                },
                include: {
                    treino_exercicio: { include: { exercicio: true } }
                }
            });
            return updatedTreino;
        });
    }
    deleteTreino(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // primeiro tive que deletar todos os registros com id_treino = id
            const deletedTreinoExercicio = yield prisma_1.prisma.treino_exercicio.deleteMany({
                where: { id_treino: id }
            });
            const deletedTreino = yield prisma_1.prisma.treino.delete({
                where: { id_treino: id },
                include: {
                    treino_exercicio: { include: { exercicio: true } }
                }
            });
            return;
        });
    }
    // Rotina de rotina
    getRotina(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield prisma_1.prisma.rotina.findUnique({
                where: { id_rotina: id },
                include: {
                    rotina_treino: {
                        include: {
                            treino: {
                                include: {
                                    treino_exercicio: {
                                        include: {
                                            exercicio: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            });
        });
    }
    createRotina(nome, usuario, treinos) {
        return __awaiter(this, void 0, void 0, function* () {
            const createdRotina = yield prisma_1.prisma.rotina.create({
                data: {
                    nome: nome,
                    usuario: {
                        connect: {
                            id_usuario: usuario.id_usuario
                        },
                    },
                    rotina_treino: {
                        create: treinos.map(treino => ({
                            treino: { connect: { id_treino: treino.id_treino } }
                        }))
                    }
                },
                include: {
                    rotina_treino: {
                        include: { treino: true }
                    }
                }
            });
            return createdRotina;
        });
    }
    putRotina(id, nome, usuario, treinos) {
        return __awaiter(this, void 0, void 0, function* () {
            const updatedRotina = yield prisma_1.prisma.rotina.update({
                where: { id_rotina: id },
                data: {
                    nome: nome,
                    usuario: {
                        connect: {
                            id_usuario: usuario.id_usuario
                        },
                    },
                    rotina_treino: {
                        deleteMany: {},
                        create: treinos.map(treino => ({
                            treino: { connect: { id_treino: treino.id_treino } }
                        }))
                    }
                },
                include: {
                    rotina_treino: { include: { treino: true } }
                }
            });
            return updatedRotina;
        });
    }
    deleteRotina(id) {
        return __awaiter(this, void 0, void 0, function* () {
            // primeiro tive que deletar todos os registros com id_rotina = id
            const deletedRotinaTreino = yield prisma_1.prisma.rotina_treino.deleteMany({
                where: { id_rotina: id }
            });
            const deletedRotina = yield prisma_1.prisma.rotina.delete({
                where: { id_rotina: id },
                include: {
                    rotina_treino: { include: { treino: true } }
                }
            });
            return deletedRotina;
        });
    }
}
exports.default = new RotinaTreino();
