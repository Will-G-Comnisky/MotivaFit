import { Router, Request, Response } from "express";
import  { UserController } from './app/controllers/UserController'


const router = Router();

router.get("/", (req: Request, res: Response) => {
    return res.send('Welcome!')
});

router.get("/login", UserController.login)


export default router;
