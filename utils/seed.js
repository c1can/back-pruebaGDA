import { sequelize, Departamento, Municipio, Empleado } from './../models/index.js'


export async function seedDepartamentos() {
    try {

        await sequelize.sync()

        const departamentos = [
            "Alta Verapaz",
            "Baja Verapaz",
            "Chimaltenango",
            "Chiquimula",
            "El Progreso",
            "Escuintla",
            "Guatemala",
            "Huehuetenango",
            "Izabal",
            "Jalapa",
            "Jutiapa",
            "Petén",
            "Quetzaltenango",
            "Quiché",
            "Retalhuleu",
            "Sacatepéquez",
            "San Marcos",
            "Santa Rosa",
            "Sololá",
            "Suchitepéquez",
            "Totonicapán",
            "Zacapa"
        ];

        for(const nombre of departamentos) {
            await Departamento.create({nombre})
        }

        console.log('Base de datos rellenados con departamentos')
        process.exit(0)

    }catch(error) {
        console.log(`Error al llenar base de datos con departamentos`)
        process.exit(1)
    }
}



export async function seedMunicipios() {

    try {
        await sequelize.sync()

 const municipios = [
        { nombre: 'Cobán', departamento_id: 1 },
        { nombre: 'San Juan Chamelco', departamento_id: 1 },
        { nombre: 'San Pedro Carchá', departamento_id: 1 },
        
        { nombre: 'Salamá', departamento_id: 2 },
        { nombre: 'San Miguel Chicaj', departamento_id: 2 },
        { nombre: 'Rabinal', departamento_id: 2 },
        
        { nombre: 'Chimaltenango', departamento_id: 3 },
        { nombre: 'San José Poaquil', departamento_id: 3 },
        { nombre: 'San Martín Jilotepeque', departamento_id: 3 },
        
        { nombre: 'Chiquimula', departamento_id: 4 },
        { nombre: 'San José La Arada', departamento_id: 4 },
        { nombre: 'Esquipulas', departamento_id: 4 },
        
        { nombre: 'Guastatoya', departamento_id: 5 },
        { nombre: 'Morazán', departamento_id: 5 },
        { nombre: 'San Agustín Acasaguastlán', departamento_id: 5 },
        
        { nombre: 'Escuintla', departamento_id: 6 },
        { nombre: 'Santa Lucía Cotzumalguapa', departamento_id: 6 },
        { nombre: 'La Democracia', departamento_id: 6 },
        
        { nombre: 'Ciudad de Guatemala', departamento_id: 7 },
        { nombre: 'Mixco', departamento_id: 7 },
        { nombre: 'Villa Nueva', departamento_id: 7 },
        
        { nombre: 'Huehuetenango', departamento_id: 8 },
        { nombre: 'Chiantla', departamento_id: 8 },
        { nombre: 'Malacatancito', departamento_id: 8 },
        
        { nombre: 'Puerto Barrios', departamento_id: 9 },
        { nombre: 'Morales', departamento_id: 9 },
        { nombre: 'Livingston', departamento_id: 9 },
        
        { nombre: 'Jalapa', departamento_id: 10 },
        { nombre: 'San Pedro Pinula', departamento_id: 10 },
        { nombre: 'San Luis Jilotepeque', departamento_id: 10 },
        
        { nombre: 'Jutiapa', departamento_id: 11 },
        { nombre: 'El Progreso', departamento_id: 11 },
        { nombre: 'Santa Catarina Mita', departamento_id: 11 },
        
        { nombre: 'Flores', departamento_id: 12 },
        { nombre: 'San Benito', departamento_id: 12 },
        { nombre: 'San Andrés', departamento_id: 12 },
        
        { nombre: 'Quetzaltenango', departamento_id: 13 },
        { nombre: 'Salcajá', departamento_id: 13 },
        { nombre: 'Olintepeque', departamento_id: 13 },
        
        { nombre: 'Santa Cruz del Quiché', departamento_id: 14 },
        { nombre: 'Chiché', departamento_id: 14 },
        { nombre: 'Chinique', departamento_id: 14 },
        
        { nombre: 'Retalhuleu', departamento_id: 15 },
        { nombre: 'San Sebastián', departamento_id: 15 },
        { nombre: 'Santa Cruz Muluá', departamento_id: 15 },
        
        { nombre: 'Antigua Guatemala', departamento_id: 16 },
        { nombre: 'Jocotenango', departamento_id: 16 },
        { nombre: 'Pastores', departamento_id: 16 },
        
        { nombre: 'San Marcos', departamento_id: 17 },
        { nombre: 'San Pedro Sacatepéquez', departamento_id: 17 },
        { nombre: 'Esquipulas Palo Gordo', departamento_id: 17 },
        
        { nombre: 'Cuilapa', departamento_id: 18 },
        { nombre: 'Barberena', departamento_id: 18 },
        { nombre: 'Santa Rosa de Lima', departamento_id: 18 },
        
        { nombre: 'Sololá', departamento_id: 19 },
        { nombre: 'San José Chacayá', departamento_id: 19 },
        { nombre: 'Santa María Visitación', departamento_id: 19 },
        
        { nombre: 'Mazatenango', departamento_id: 20 },
        { nombre: 'Cuyotenango', departamento_id: 20 },
        { nombre: 'San Francisco Zapotitlán', departamento_id: 20 },
        
        { nombre: 'Totonicapán', departamento_id: 21 },
        { nombre: 'San Cristóbal Totonicapán', departamento_id: 21 },
        { nombre: 'San Francisco El Alto', departamento_id: 21 },
        
        { nombre: 'Zacapa', departamento_id: 22 },
        { nombre: 'Estanzuela', departamento_id: 22 },
        { nombre: 'Río Hondo', departamento_id: 22 }
]

        for (const municipio of municipios) {
            const { nombre, departamento_id} = municipio
            await Municipio.create({nombre, departamento_id})
        }

        console.log("Base de datos rellanada con municipios")


    }catch(error) {
        console.log(`Error al intentar llenar la base de datos con municipios: ${error}`)
    }
    
}

export async function seedFormatProcedure() {
    try {
        await sequelize.query(`SELECT insertar_empleado(
            :nombres,
            :apellidos,
            :fechaNacimiento,
            :direccion,
            :telefono,
            :correoElectronico,
            :departamento_id,
            :municipio_id)`, {
                replacements: {
                    nombres: 'Carlos',
                    apellidos: 'Reyes',
                    fechaNacimiento: '1999-11-02',
                    direccion: 'Zona 1, Guatemala',
                    telefono: '12345678',
                    correoElectronico: 'carlos@gmail.com',
                    departamento_id: 1,
                    municipio_id: 1
                }
            })

    }catch(error) {
        console.log(`Error al crear datos en la base de datos: ${error}`)
    }
}