const Testimonio = require('../models/Testimonios');

exports.getComments = (req, res) => {
    Testimonio.findAll()
    .then( testimonios => {
        res.render('testimonios', {
            page: 'Testimonios',
            testimonios
        });
    }).catch( e => {
        console.log('error: '+ e)
    })
}

/* Agrega un testimonio */
exports.addComment = (req, res) => {
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
    

}