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
exports.getEmpleado = exports.deleteEmpleado = exports.updateEmpleado = exports.getEmpleados = exports.createEmpleado = void 0;
const Empleado_1 = require("../entities/Empleado");
const createEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body;
        const empleado = new Empleado_1.Empleado();
        empleado.nif = nif;
        empleado.nombre = nombre;
        empleado.apellido1 = apellido1;
        empleado.apellido2 = apellido2;
        empleado.codigo_departamento = parseInt(codigo_departamento);
        yield empleado.save();
        console.log(empleado);
        return res.json(empleado);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.createEmpleado = createEmpleado;
const getEmpleados = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const empleados = yield Empleado_1.Empleado.find({
            relations: {
                codigo_departamento: true,
            },
        });
        console.log(empleados[0].nombre);
        return res.json(empleados);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getEmpleados = getEmpleados;
const updateEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.params;
        const empleado = yield Empleado_1.Empleado.findOneBy({ codigo: parseInt(codigo) });
        if (!empleado)
            return res.status(404).json({ message: "Empleado no existe" });
        yield Empleado_1.Empleado.update({ codigo: parseInt(codigo) }, req.body);
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.updateEmpleado = updateEmpleado;
const deleteEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.params;
        const result = yield Empleado_1.Empleado.delete({ codigo: parseInt(codigo) });
        console.log(result);
        if (result.affected === 0) {
            return res.status(404).json({ messagge: `Empleado no Existe con código: ${codigo}` });
        }
        return res.sendStatus(204);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.deleteEmpleado = deleteEmpleado;
const getEmpleado = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { codigo } = req.params;
        const empleado = yield Empleado_1.Empleado.findOneBy({ codigo: parseInt(codigo) });
        if (!empleado)
            return res.status(404).json({ message: "Empleado no existe" });
        return res.json(empleado);
    }
    catch (error) {
        if (error instanceof Error) {
            return res.status(500).json({ message: error.message });
        }
    }
});
exports.getEmpleado = getEmpleado;
