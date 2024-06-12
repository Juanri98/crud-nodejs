import {Request, Response}from 'express'
import { Departamento } from "../entities/Departamento";

export const createDepartamento = async (req:Request, res:Response) => {
    try {
        const { nombre, presupuesto } = req.body

        const departamento = new Departamento()
        departamento.nombre = nombre
        departamento.presupuesto = presupuesto

        await departamento.save()

        console.log(departamento)

        return res.json(departamento)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const getDepartamentos = async (req:Request, res:Response) => {
    
    try {
        const departamento = await Departamento.find()
    
        return res.json(departamento);
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        } 
    }
}

export const updateDepartamento = async (req:Request, res:Response) => {
    try {
        const { codigo } = req.params

        const departamento = await Departamento.findOneBy({codigo: parseInt(codigo)})
    
        if (!departamento) return res.status(404).json({ message: "Departamento no existe"})

        await Departamento.update({codigo: parseInt(codigo)}, req.body)

        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        } 
    }
}

export const deleteDepartamento = async (req:Request, res:Response) => {
    try {
        const { codigo } = req.params

        const result = await Departamento.delete({codigo: parseInt(codigo)})
        console.log(result)

        if (result.affected === 0){
            return res.status(404).json({messagge: `Departamento no Existe con código: ${codigo}`})
        }

        return res.sendStatus(204)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        }
    }
}

export const getDepartamento =async (req:Request, res:Response) => {
    try {
        const { codigo } = req.params

        const departamento = await Departamento.findOneBy({codigo: parseInt(codigo)})
    
        if (!departamento) return res.status(404).json({ message: "Departamento no existe"})

        return res.json(departamento)
    } catch (error) {
        if (error instanceof Error){
            return res.status(500).json({message: error.message})
        } 
    }
}