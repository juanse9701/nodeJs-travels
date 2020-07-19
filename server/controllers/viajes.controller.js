const Viaje = require('../models/viajes')

exports.getTravels = (req, res) => {
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
}

exports.getTravel = async (req, res) => {
    try {
        const viaje = await Viaje.findByPk(req.params.id);
        res.render('viaje', {
            pagina: viaje.titulo,
            viaje: viaje
        });
    } catch ( e) {
        console.log('error en '+ e);
    }
}