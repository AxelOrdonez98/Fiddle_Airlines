const express = require('express')
const exphbs = require('express-handlebars')
const path = require('path')
const morgan = require('morgan')
const methodOverride = require('method-override')

// Inicial
const app = express()


// Configuracion
app.set('port', process.env.PORT || 4000)
app.set('views',path.join(__dirname,'views'))
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}))
app.set('view engine', '.hbs')


// Middlewars
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(methodOverride('_method'))


//Variables globales



// Rutas
app.use(require('./routes/index.routes'))
app.use(require('./routes/pasajero.routes'))
app.use(require('./routes/capitan.routes'))
app.use(require('./routes/aerolinea.routes'))
app.use(require('./routes/aeropuerto.routes'))

// Archivos staticos
app.use(express.static(path.join(__dirname,'public')))



module.exports = app