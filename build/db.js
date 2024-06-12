"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Departamento_1 = require("./entities/Departamento");
const Empleado_1 = require("./entities/Empleado");
exports.AppDataSource = new typeorm_1.DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "test",
    entities: [Departamento_1.Departamento, Empleado_1.Empleado],
    synchronize: true,
    logging: true,
});
