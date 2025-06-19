import sequelize from "../config/db.js";
import Departamento from "./departamento.js";
import Municipio from "./municipio.js";
import Empleado from "./empleado.js";

Departamento.hasMany(Municipio, {foreignKey: 'departamento_id'})
Municipio.belongsTo(Departamento, {foreignKey: 'departamento_id'})

Departamento.hasMany(Empleado, {foreignKey: 'departamento_id'})
Departamento.hasMany(Empleado, {foreignKey: 'departamento_id'})

Empleado.belongsTo(Departamento, {foreignKey: 'departamento_id'})
Empleado.belongsTo(Municipio, {foreignKey: 'municipio_id'})


export {sequelize, Departamento, Municipio, Empleado}