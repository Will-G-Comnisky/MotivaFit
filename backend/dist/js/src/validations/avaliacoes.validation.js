"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.avaliacoesValidation = void 0;
const yup = __importStar(require("yup"));
exports.avaliacoesValidation = yup.object({
    descricao: yup.string().required(),
    id_admin: yup.number().required(),
    id_aluno: yup.number().required(),
    peso: yup.string().required(),
    medida_braco_dir_rlx: yup.string().required(),
    medida_braco_esq_rlx: yup.string().required(),
    medida_antebraco_esq: yup.string().required(),
    medida_antebraco_dir: yup.string().required(),
    medida_escapular: yup.string().required(),
    medida_torax: yup.string().required(),
    medida_cintura: yup.string().required(),
    medida_abdomen: yup.string().required(),
    medida_quadril: yup.string().required(),
    medida_coxa_esq: yup.string().required(),
    medida_coxa_dir: yup.string().required(),
    medida_panturrilha_esq: yup.string().required(),
    medida_panturrilha_dir: yup.string().required(),
    dobras_triceps: yup.string().required(),
    dobras_sub_escapular: yup.string().required(),
    dobras_peitoral: yup.string().required(),
    dobras_med_axilar: yup.string().required(),
    dobras_supra_iliaca: yup.string().required(),
    dobras_abdomen: yup.string().required(),
    dobras_coxa: yup.string().required(),
    data_avaliacao: yup.date().required(),
});
