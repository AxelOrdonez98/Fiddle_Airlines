const { Schema, model } = require('mongoose')
const Aeropuerto = new Schema({
    Nombre: {
        type: String,
        require: true
    },
    Ciudad: {
        type: String,
        require: true
    },
    Direccion_Aeropuerto: {
        type: String,
        require: true
    },
    Telefono: {
        type: String,
        require: true
    },
    Id_Mundial: {
        type: String,
        require: true
    },
    Numero_de_Aeropuerto: {
        type: String,
        require: true
    },
    Capacidad_Maxima_de_Viajes: {
        type: String,
        require: true
    },
    Numero_de_Permiso_de_Ciudad: {
        type: String,
        require: true
    },
    Numero_de_Aerolinias_Establecidas: {
        type: String,
        require: true
    },
    Tamano_Pista_Km_Cuadrados: {
        type: String,
        require: true
    },
    Numero_de_Torres_de_Control: {
        type: String,
        require: true
    },
    Numero_de_Porta_Aviones: {
        type: String,
        require: true
    },
    Tipo_de_Pavimento: {
        type: String,
        require: true
    },
    Senalizaciones_Completas: {
        type: String,
        require: true
    },
    Iluminacion_Completa: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})
module.exports = model('Aeropuerto', Aeropuerto)