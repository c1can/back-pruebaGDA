import { Router } from "express";
import { Departamento, Municipio } from "../models/index.js";


const router = Router()


router.get("/", async(req, res) => {

   try {
       const departamentos =  await Departamento.findAll({
        include: [
            {model: Municipio, attributes: ['nombre']},
            {model: Municipio, attributes: ['municipio_id']}
        ]
       })
       res.status(200).json(departamentos)
    
   } catch (error) {
        console.log(`Surgio un error al querer consultar los departamentos`)
   }

})

export default router