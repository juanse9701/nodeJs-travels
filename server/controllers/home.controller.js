const Viaje = require('../models/viajes');
const Testimonio = require('../models/Testimonios');

exports.getHome = (req, res) => {
    const p1 = Viaje.findAll({limit: 3}).catch(e => e);
    const p2 = Testimonio.findAll({limit: 3}).catch(e => e);

    Promise.all([p1, p2]).then( result => {
        res.render('index',{
            css: 'index',
            pagina: 'inicio',
            viajes: result[0],
            testimonios: result[1]
        });
    }).catch(e => console.log('error: ' + e));

}