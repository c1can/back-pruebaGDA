import express from 'express'
const router = express.Router()

import { Empleado, Departamento, Municipio, sequelize } from '../models/index.js'


router.get('/', async(req, res) => {

    try {
        const empleados = await Empleado.findAll({ //cambiar a storedProcedure
        include: [
            {model: Departamento, attributes: ['nombre']},
            {model: Municipio, attributes: ['nombre']}
        ]
        })

       res.json(empleados)

    }catch(error) {
        console.log(`Error al obtener empleados: ${error}`)
    }
    
})

router.post('/', async(req, res) => {

    const requireFields = [
        'nombres', 
        'apellidos', 
        'fecha_nacimiento', 
        'direccion', 
        'telefono', 
        'correo_electronico', 
        'departamento_id',
        'municipio_id']

        for(const requireField of requireFields) {
            if(!req.body[requireField]) {
                return res.status(400).json({error: `Falta el campo ${requireField}`})
            }
        }

    try {
        await sequelize.query(
            `SELECT insertar_empleado(
            :nombres,
            :apellidos,
            :fecha_nacimiento,
            :direccion,
            :telefono,
            :correo_electronico,
            :departamento_id,
            :municipio_id)`, {replacements: req.body}
        )
        res.status(201).json('Empleado creado exitosamente')
    }
    catch(err) {
        res.status(400).json({error: err.message })
    }
})

router.put('/:id', async(req, res) => {
    const empleado_id = req.params.id

    const requeridos = ["nombres", "apellidos", "direccion", "telefono", "correo_electronico"]

    for(const requerido of requeridos) {
        if(!req.body[requerido]) {
            return res.status(400).json({message: `Falta el campo: ${requerido}`})
        }
    }

    const {nombres, apellidos, direccion, telefono, correo_electronico} = req.body

    try {
        await sequelize.query(`
        SELECT actualizar_empleado(
        :empleado_id,
        :nombres,
        :apellidos,
        :direccion,
        :telefono,
        :correo_electronico)`, {replacements: {
            empleado_id: parseInt(empleado_id),
            nombres,
            apellidos,
            direccion,
            telefono,
            correo_electronico,
        }})

        res.status(200).json({mensaje: "empleado actualizado correctamente"})

    }catch(error) {
        console.log(`No se pudo actualizar el usuario: ${error}`)
    }
})


router.delete('/:id', async(req, res) => {
    const idEmpleado = req.params.id

    try {
        await sequelize.query(`SELECT eliminar_empleado(:empleado_id)`, {replacements: {
            empleado_id: parseInt(idEmpleado)
        }})
        return res.status(200).json({message: "Empleado eliminado correctamente"})

    }catch(error) {
        console.log(`Algo salio mal al querer eliminar el usuario: ${error}`)
    }
})

export default router