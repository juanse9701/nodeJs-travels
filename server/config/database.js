const sequelize = require('sequelize')

module.exports = new sequelize('viajes', 'root', 'root', {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: '3306'
})