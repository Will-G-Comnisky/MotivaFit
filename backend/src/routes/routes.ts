import { Router } from "express";
import userRoutes from "./user.routes";
import authRoutes from "./auth.routes";
import addressRoutes from "./address.routes";
import alunoRoutes from "./aluno.routes";
import adminRoutes from "./admin.routes";
import avaliacaoRoutes from "./avaliacao.routes";

const routes = (app: Router) => {
    userRoutes(app);
    authRoutes(app);
    addressRoutes(app);
    alunoRoutes(app);
    adminRoutes(app);
    avaliacaoRoutes(app);
}

export default routes;







//const router = Router();
/*
router.get("/", (req: Request, res: Response) => {
    return res.send('Welcome!')
});
router.get("/login", LoginController.login)
*/

// router.post("/user", UserController.createUser)


