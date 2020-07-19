const express = require('express');
const router = express.Router();

const nosotrosController = require('../controllers/nosotros.controller')
const homeController = require('../controllers/home.controller')
const viajesController = require('../controllers/viajes.controller')
const testimoniosController = require('../controllers/testimonios')

module.exports = function() {

    router.get('/', homeController.getHome)

    router.get('/nosotros', nosotrosController.infoPrincipal)

    router.get('/viajes', viajesController.getTravels)

    router.get('/viajes/:id', viajesController.getTravel)

    router.get('/testimonios', testimoniosController.getComments)

    router.post('/testimonios', testimoniosController.addComment)

    return router;
}