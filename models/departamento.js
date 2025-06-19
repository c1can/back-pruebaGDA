import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";


const Departamento = sequelize.define('Departamento', {
    departamento_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [2]
        }
    } 
},
{
    tableName: 'departamentos',
    timestamps: false
} 
)

export default Departamento