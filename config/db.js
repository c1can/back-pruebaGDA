import dotenv from 'dotenv'
dotenv.config()

import { Sequelize } from "sequelize";

const dbHost = process.env.DB_HOST
const dbName = process.env.DB_NAME
const dbPass = process.env.DB_PASSWORD


const sequelize = new Sequelize(dbName, 'postgres', dbPass, {
    host: dbHost,
    dialect: 'postgres'
})

export default sequelize