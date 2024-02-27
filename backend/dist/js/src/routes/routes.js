"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = __importDefault(require("./user.routes"));
const auth_routes_1 = __importDefault(require("./auth.routes"));
const address_routes_1 = __importDefault(require("./address.routes"));
const aluno_routes_1 = __importDefault(require("./aluno.routes"));
const admin_routes_1 = __importDefault(require("./admin.routes"));
const avaliacao_routes_1 = __importDefault(require("./avaliacao.routes"));
const telefone_routes_1 = __importDefault(require("./telefone.routes"));
const plano_routes_1 = __importDefault(require("./plano.routes"));
const routes = (app) => {
    (0, user_routes_1.default)(app);
    (0, auth_routes_1.default)(app);
    (0, address_routes_1.default)(app);
    (0, aluno_routes_1.default)(app);
    (0, admin_routes_1.default)(app);
    (0, avaliacao_routes_1.default)(app);
    (0, telefone_routes_1.default)(app);
    (0, plano_routes_1.default)(app);
};
exports.default = routes;
//const router = Router();
/*
router.get("/", (req: Request, res: Response) => {
    return res.send('Welcome!')
});
router.get("/login", LoginController.login)
*/
// router.post("/user", UserController.createUser)
