import { Router } from "express";
import userRoutes from "./user.routes";

const routes = (app: Router) => {
    userRoutes(app);
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


