import {DataSource} from 'typeorm'
import { Departamento } from './entities/Departamento'
import { Empleado } from './entities/Empleado'

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "admin",
    database: "test",
    entities: [Departamento, Empleado],
    synchronize: true,
    logging: true,
})