const { Schema, model } = require('mongoose')
const Aerolinea = new Schema({
    Nombre_Aerolinia: {
        type: String,
        require: true
    },
    Numero_de_Avion: {
        type: String,
        require: true
    },
    Horas_de_vuelo: {
        type: String,
        require: true
    },
    Capacidad_de_Combustible: {
        type: String,
        require: true
    },
    Aerolinia_Perteneciente: {
        type: String,
        require: true
    },
    Numero_de_Reparaciones: {
        type: String,
        require: true
    },
    Capacidad_Maxima_de_Pasajeros: {
        type: String,
        require: true
    },
    Capacidad_Maxima_de_Peso_Kg: {
        type: String,
        require: true
    },
    Tamano_Avion_MTS_Cuadrados: {
        type: String,
        require: true
    },
    Ciudad_de_Origen: {
        type: String,
        require: true
    },
    Tipo_de_Avion: {
        type: String,
        require: true
    },
    Numero_de_Sobrecargo_Contratados: {
        type: String,
        require: true
    },
    Nombre: {
        type: String,
        require: true
    },
    Apellidos: {
        type: String,
        require: true
    },
    Sexo: {
        type: String,
        require: true
    },
    Tipo_de_Sangre: {
        type: String,
        require: true
    },
    Vacunas: {
        type: String,
        require: true
    },
    Donante_de_Organos: {
        type: String,
        require: true
    },
    Religion: {
        type: String,
        require: true
    },
    Nacionalidad: {
        type: String,
        require: true
    },
    Estado_Civil: {
        type: String,
        require: true
    },
    Tipo_De_Aprendizaje_Vuelo: {
        type: String,
        require: true
    },
    Numero_De_Cedula_Profecional: {
        type: String,
        require: true
    },
    Tipos_de_Vuelo: {
        type: String,
        require: true
    },
    Numero_de_Permiso: {
        type: String,
        require: true
    }
}, {
    timestamps: true
})
module.exports = model('Aerolinea', Aerolinea)