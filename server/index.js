const express = require('express')
const routes = require('./routes')
const path = require('path')

const app = express()
const configs = require('./config')
const bodyParser = require('body-parser')

/* Habilitar pug */
app.set('view engine', 'pug')

/* Indicar la direccion de las vistas */
app.set('views', path.join(__dirname, './views'))

/* establecer estaticos */

app.use(express.static('public'))

/* Definiendo el titulo de la página dependiendo del entorno */

const config = app.get('env') //obtengo el titulo

app.locals.title = configs[config].title

/* Middleware */

app.use((req, res, next) => {

    const fecha = new Date()
    res.locals.year = fecha.getFullYear()
    return next()
})

/* Configurando el body parser para recibir la data */
app.use(bodyParser.urlencoded({extended: true}));

/* Configuración del servidor

    routes es una funcion por lo cual se debe invocar, esta nos indica las rutas de nuestra aplicación
*/
app.use('/', routes())

/* Puerto donde escuchara */
app.listen(3002, () => {
    console.log('servidor corriendo en el puerto 3002')
})