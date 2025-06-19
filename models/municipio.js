import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";
import Departamento from "./departamento.js";


const Municipio = sequelize.define('Municipio' , {
    municipio_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {len: [2]}
    },
    departamento_id: {
        type: DataTypes.INTEGER,
        references: {
            model: Departamento,
            key: 'departamento_id'
        }
    }
}, {
    tableName: 'municipios', 
    timestamps: false
}
)


export default Municipio
