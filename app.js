import express from 'express'
import empleadosRoutes from './routes/empleados.js'
import departamentosRoutes from './routes/departamentos.js'
import cors from 'cors'

const app = express()

app.use(cors())

app.use(express.json())

//Empleados
app.use('/api/empleados', empleadosRoutes)

//Departamentos
app.use('/api/departamentos', departamentosRoutes)

export default app