import {Request, Response}from 'express'
import { Empleado } from "../entities/Empleado";

export const createEmpleado = async (req:Request, res:Response) => {
    try {
        const { nif, nombre, apellido1, apellido2, codigo_departamento } = req.body

        const empleado = new Empleado()
        empleado.nif = nif
        empleado.nombre = nombre
        empleado.apellido1 = apellido1
        empleado.apellido2 = apellido2
        empleado.codigo_departamento = parseInt(codigo_departamento)

        await empleado.save()

        console.log(empleado)

        return res.json(empleado)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const getEmpleados = async (req:Request, res:Response) => {
    
    try {
        const empleados = await Empleado.find({
            relations: {
                codigo_departamento: true,
            },
        })
        console.log(empleados[0].nombre)
        return res.json(empleados);
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        } 
    }
}

export const updateEmpleado = async (req:Request, res:Response) => {
    try {
        const { codigo } = req.params

        const empleado = await Empleado.findOneBy({codigo: parseInt(codigo)})
    
        if (!empleado) return res.status(404).json({ message: "Empleado no existe"})

        await Empleado.update({codigo: parseInt(codigo)}, req.body)

        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        } 
    }
}

export const deleteEmpleado = async (req:Request, res:Response) => {
    try {
        const { codigo } = req.params

        const result = await Empleado.delete({codigo: parseInt(codigo)})
        console.log(result)

        if (result.affected === 0){
            return res.status(404).json({messagge: `Empleado no Existe con código: ${codigo}`})
        }

        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const getEmpleado =async (req:Request, res:Response) => {
    try {
        const { codigo } = req.params

        const empleado = await Empleado.findOneBy({codigo: parseInt(codigo)})
    
        if (!empleado) return res.status(404).json({ message: "Empleado no existe"})

        return res.json(empleado)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        } 
    }
}