"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};

Object.defineProperty(exports, "__esModule", { value: true });
const spdy_1 = __importDefault(require("spdy")); // HTTP 2 (retrocompativel com HTTPS)
const fs_1 = __importDefault(require("fs"));
const app_1 = __importDefault(require("../app"));
const server = spdy_1.default.createServer({
    key: fs_1.default.readFileSync("key.pem", "utf-8"),
    cert: fs_1.default.readFileSync("cert.pem", "utf-8")
}, app_1.default);
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
    console.log(`Server Rodando em https://localhost:${PORT}`);
});
