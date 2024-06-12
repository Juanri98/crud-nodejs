import { Router } from "express";
import { createEmpleado, getEmpleados, updateEmpleado, deleteEmpleado, getEmpleado } from '../controllers/empleado.controllers'

const router = Router();

router.post('/empleados', createEmpleado)
router.get('/empleados', getEmpleados)
router.put('/empleados/:codigo', updateEmpleado)
router.delete('/empleados/:codigo', deleteEmpleado)
router.get('/empleados/:codigo', getEmpleado)

export default router;