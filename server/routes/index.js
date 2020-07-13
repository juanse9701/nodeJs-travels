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
        Testimonio.findAll()
        .then( testimonios => {
            res.render('testimonios', {
                page: 'Testimonios',
                testimonios
            });
        }).catch( e => {
            console.log('error: '+ e)
        })
    })

    router.post('/testimonios', (req, res) => {
        /* obteniendo los parametros de la petición */
        const { name, email, message } = req.body

        let errors = []

        !name && errors.push({mensaje: 'falta el nombre'})
        !email && errors.push({mensaje: 'falta el email'})
        !message && errors.push({mensaje: 'falta el mensaje'})

        if (errors.length > 0) {
            res.render('testimonios', {
                page: 'Testimonios',
                errors: errors.map(v => v.mensaje).join(', '),
                name,
                email,
                message,
                testimonios: []
            });  
        } else {
            Testimonio.create({name, email, message})
            .then(() => res.redirect('/testimonios'))
            .catch(e => console.log('error: '+ e))
        }
        

    })

    return router;
}