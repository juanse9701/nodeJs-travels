const express = require('express');
const router = express.Router();

const Viaje = require('../models/viajes')
const Testimonio = require('../models/Testimonios');
const { render } = require('pug');

module.exports = function() {

    router.get('/', (req, res) => {
        res.render('index');
    })

    router.get('/nosotros', (req, res) => {
        res.render('nosotros', {
            pagina: 'Nosotros'
        });
    })

    router.get('/viajes', (req, res) => {
        Viaje.findAll({
            attributes: ['id',`titulo`, `precio`, `fecha_ida`, `fecha_vuelta`, `imagen`, 'descripcion', 'disponibles']
          })
        .then(viajes => {
            res.render('viajes', {
                pagina: 'Nuestros viajes',
                viajes
            });
        })
        .catch( e => console.log('error en '+ e))
    })

    router.get('/viajes/:id', (req, res) => {
        Viaje.findByPk(req.params.id)
        .then(viaje => {
            res.render('viaje', {
                pagina: viaje.titulo,
                viaje
            });
        })
        .catch( e => console.log('error en '+ e))
    })

    router.get('/testimonios', (req, res) => {
        res.render('testimonios', {
            page: 'Testimonios'
        });
    })

    router.post('/testimonios', (req, res) => {
        console.log(req.body)
        /* obteniendo los parametros de la petición */
        const { name, email, message } = req.body
    })

    return router;
}