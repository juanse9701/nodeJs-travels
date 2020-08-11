const sequelize = require('sequelize')
require('dotenv').config({path: 'variables.env'})

module.exports = new sequelize(process.env.BD_NAME, process.env.BD_USER, process.env.BD_PASS, {
    dialect: 'mariadb',
    host: process.env.BD_HOST,
    port: process.env.BD_PORT
})