import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const Empleado = sequelize.define('Empleado' , {
    empleado_id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombres: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [2]}
    },
    apellidos: {
        type: DataTypes.STRING,
        allowNull: false,
        valida: {len: [2]}
    },
    fecha_nacimiento: {
        type: DataTypes.DATEONLY,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false
    },
    telefono: {
        type: DataTypes.STRING,
        allowNull: false
    },
    correo_electronico: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {isEmail: true}
    },
    departamento_id: {
        type: DataTypes.INTEGER,
    },
    municipio_id: {
        type: DataTypes.INTEGER
    }
},
{
    tableName: 'empleados',
    timestamps: false
})


export default Empleado