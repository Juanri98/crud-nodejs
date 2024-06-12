import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, BaseEntity } from "typeorm";
import { Departamento } from "./Departamento"

@Entity('empleado')
export class Empleado extends BaseEntity{

    @PrimaryGeneratedColumn()
    codigo: number

    @Column({
        length: 9,
    })
    nif: string

    @Column({
        length: 100,
    })
    nombre: string

    @Column({
        length: 100,
    })
    apellido1: string

    @Column({
        length: 100,
    })
    apellido2: string

    @ManyToOne(() => Departamento, (departamento) => departamento.codigo)
    codigo_departamento: number

}