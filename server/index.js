const express = require('express')
const routes = require('./routes')
const path = require('path')
const app = express()

/* Habilitar pug */
app.set('view engine', 'pug')

/* Indicar la direccion de las vistas */
app.set('views', path.join(__dirname, './views'))

/* establecer estaticos */

app.use(express.static('public'))

/* Configuración del servidor

    routes es una funcion por lo cual se debe invocar, esta nos indica las rutas de nuestra aplicación
*/
app.use('/', routes())

/* Puerto donde escuchara */
app.listen(3002, () => {
    console.log('servidor corriendo en el puerto 3002')
})