const { DataTypes } = require('sequelize')
const db = require('../config/database')

const testimonio = db.define('testimonio', {
    name: {
        type: DataTypes.STRING
    },
    email: {
        type: DataTypes.STRING
    },
    message: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
})

module.exports = testimonio;