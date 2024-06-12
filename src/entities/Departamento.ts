import { Entity, PrimaryGeneratedColumn, Column, OneToMany, BaseEntity} from "typeorm";
import { Empleado } from "./Empleado";

@Entity('departamento')
export class Departamento extends BaseEntity{

    @PrimaryGeneratedColumn()
    @OneToMany(() => Empleado, (empleado) => empleado.codigo_departamento)
    codigo: number

    @Column({
        length: 100,
    })
    nombre: string

    @Column()
    presupuesto: number

}