"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const db_1 = require("./app/database/db");
const http_status_codes_1 = require("http-status-codes");
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    return res.send('Welcome!');
});
router.get("/login", (req, res) => {
    const { user, password } = req.body;
    const resultUser = (0, db_1.getUserByName)(user);
    if (!resultUser) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send({ 'message': 'User not found' });
    }
    if (resultUser.password !== password) {
        return res.status(http_status_codes_1.StatusCodes.UNAUTHORIZED).send({ 'message': 'Password mismatch' });
    }
    res.status(http_status_codes_1.StatusCodes.ACCEPTED).send({ 'message': 'Você foi logado com sucesso' });
});
exports.default = router;
