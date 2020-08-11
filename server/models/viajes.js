const { DataTypes } = require('sequelize')
const db = require('../config/database')

/* Conexion a la base de datos de mysql */
/* db.authenticate().then(()=>{
    console.log('se conecto a la base de datos')
}).catch((e)=> {
    console.error('hubo un error a la hora de establecer la conexion '+ e)
}) */

const Viaje = db.define('viaje', {
    titulo: {
        type: DataTypes.STRING
    },
    precio: {
        type: DataTypes.STRING
    },
    fecha_ida: {
        type: DataTypes.DATE
    },
    fecha_vuelta: {
        type: DataTypes.DATE
    },
    imagen: {
        type: DataTypes.STRING
    },
    descripcion: {
        type: DataTypes.STRING
    },
    disponibles: {
        type: DataTypes.STRING
    }
},{
    timestamps: false
})

module.exports = Viaje;