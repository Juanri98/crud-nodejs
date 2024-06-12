"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDepartamento = exports.deleteDepartamento = exports.updateDepartamento = exports.getDepartamentos = exports.createDepartamento = void 0;
const Departamento_1 = require("../entities/Departamento");
const createDepartamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nombre, presupuesto } = req.body;
        const departamento = new Departamento_1.Departamento();
        departamento.nombre = nombre;
        departamento.presupuesto = presupuesto;
        yield departamento.save();
        console.log(departamento);
        return res.json(departamento);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createDepartamento = createDepartamento;
const getDepartamentos = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const departamento = yield Departamento_1.Departamento.find();
        return res.json(departamento);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getDepartamentos = getDepartamentos;
const updateDepartamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.params;
        const departamento = yield Departamento_1.Departamento.findOneBy({ codigo: parseInt(codigo) });
        if (!departamento)
            return res.status(404).json({ message: "Departamento no existe" });
        yield Departamento_1.Departamento.update({ codigo: parseInt(codigo) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateDepartamento = updateDepartamento;
const deleteDepartamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.params;
        const result = yield Departamento_1.Departamento.delete({ codigo: parseInt(codigo) });
        console.log(result);
        if (result.affected === 0) {
            return res.status(404).json({ messagge: `Departamento no Existe con código: ${codigo}` });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteDepartamento = deleteDepartamento;
const getDepartamento = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.params;
        const departamento = yield Departamento_1.Departamento.findOneBy({ codigo: parseInt(codigo) });
        if (!departamento)
            return res.status(404).json({ message: "Departamento no existe" });
        return res.json(departamento);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getDepartamento = getDepartamento;
