import express from 'express' 
import morgan from 'morgan'
import cors from 'cors'
import departamentoRoutes from './routes/departamento.routes'
import empleadoRoutes from './routes/empleado.routes'

const app = express()

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use(departamentoRoutes)
app.use(empleadoRoutes)

export default app;
