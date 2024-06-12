import { Router } from "express";
import { createDepartamento, getDepartamentos, updateDepartamento, deleteDepartamento, getDepartamento } from '../controllers/departamento.controllers'

const router = Router();

router.post('/departamentos', createDepartamento)
router.get('/departamentos', getDepartamentos)
router.put('/departamentos/:codigo', updateDepartamento)
router.delete('/departamentos/:codigo', deleteDepartamento)
router.get('/departamentos/:codigo', getDepartamento)

export default router;