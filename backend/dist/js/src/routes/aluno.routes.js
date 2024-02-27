"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AlunoController_1 = require("../app/controllers/AlunoController");
const auth_1 = require("../middlewares/auth");
//import { authorize } from "../middlewares/permission";
const alunoRoutes = (router) => {
    router.post("/aluno", AlunoController_1.AlunoController.createAluno);
    router.get("/aluno", auth_1.verifyToken, AlunoController_1.AlunoController.getAllAlunos);
    router.get("/aluno/:id", auth_1.verifyToken, AlunoController_1.AlunoController.getUserById);
    router.put("/aluno/:id", auth_1.verifyToken, AlunoController_1.AlunoController.updateAluno);
    router.delete("/aluno/:id", auth_1.verifyToken, AlunoController_1.AlunoController.deleteAluno);
    router.get('/admin/:adminId/alunos', auth_1.verifyToken, AlunoController_1.AlunoController.getAllAlunosByAdminId);
    //router.get('/aluno/me', verifyToken, AlunoController.getOwnUserData); // Rota para um aluno obter seus próprios dados
    //router.put('/aluno/me', verifyToken, AlunoController.updateOwnUserData); // Rota para um aluno atualizar seus próprios dados
};
exports.default = alunoRoutes;
