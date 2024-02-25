import { Router } from "express";
import { AlunoController } from "../app/controllers/AlunoController";
import { verifyToken } from "../middlewares/auth";
import { checkAuthorization } from "../middlewares/permission";

const alunoRoutes = (router: Router) => {
  router.post("/aluno", checkAuthorization(true), AlunoController.createAluno);
  router.get("/aluno", checkAuthorization(true), verifyToken, AlunoController.getAllAlunos);
  router.get("/aluno/:id", checkAuthorization(true), verifyToken, AlunoController.getUserById);
  router.put("/aluno/:id", checkAuthorization(true), verifyToken, AlunoController.updateAluno);
  router.delete("/aluno/:id", checkAuthorization(true), verifyToken, AlunoController.deleteAluno);
};

export default alunoRoutes;
