import dotenv from 'dotenv'
dotenv.config()

import app from "./app.js";
import { sequelize } from './models/index.js'
import { seedDepartamentos, seedFormatProcedure, seedMunicipios } from "./utils/seed.js";

const PORT = process.env.PORT


try {
    await sequelize.authenticate()
    console.log("Conexion a la DB exitosa")

    //await sequelize.sync({force: true}) --PELIGRO :O crea las tablas en base a los modelos y borra tablas existentes
    //await sequelize.sync({alter: true}) --Crea las tablas en base a los modelos y ajusta las tablas existentes en caso de existir.
    //-----------------------------------------------------------------------------------------------------
    /**
     DESCOMENTAR SOLO AL PRIMER ARRANQUE, UNA VEZ VERIFICADO QUE EN LA BASE DE DATOS
     SE HAYAN CREADO LAS TABLAS: DEPARTAMENTOS Y MUNICIPIOS CON SUS RESPECTIVOS DATOS
     DETENER EL SERVIDOR, VOLVER A COMENTAR Y ARRANCAR EL SERVIDOR.
     * 
     */
    
    //1.await seedDepartamentos() 
    //2.await seedMunicipios()

    app.listen(PORT, () => {
        console.log(`Servidor corriendo en http://localhost:${PORT}`)
    })

}catch(error) {
    console.log("Error al conectar a la base de datos: ", error)
} 