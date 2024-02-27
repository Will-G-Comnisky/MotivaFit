"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = void 0;
const http_status_codes_1 = require("http-status-codes");
const jwt_decode_1 = require("jwt-decode");
const authorize = (req, res, next) => {
    const token = req.headers.authorization;
    const replace = (token === null || token === void 0 ? void 0 : token.replace("Bearer ", "")) || "";
    const decoded = (0, jwt_decode_1.jwtDecode)(replace);
    const { tipo_user } = decoded;
    console.log(decoded);
    // Verificar permissões com base no tipo de usuário
    if (tipo_user === 'admin') {
        // Se for um administrador, permita o acesso
        next();
    }
    else {
        // Se não for um administrador, negue o acesso
        return res.status(http_status_codes_1.StatusCodes.FORBIDDEN).json({ message: `Acesso não autorizado + ${tipo_user}` });
    }
};
exports.authorize = authorize;
