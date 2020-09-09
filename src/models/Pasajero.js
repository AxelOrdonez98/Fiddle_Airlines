const { Schema, model } = require('mongoose')
const Pasajero = new Schema({
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
    Pais: {
        type: String,
        require: true
    },
    Ciudad: {
        type: String,
        require: true
    },
    Calle: {
        type: String,
        require: true
    },
    Numero_de_Domicilio: {
        type: String,
        require: true
    },
    Codigo_Postal: {
        type: String,
        require: true
    },
    Colonia: {
        type: String,
        require: true
    },
    Referencia_Calle_1: {
        type: String,
        require: true
    },
    Referencia_Calle_2: {
        type: String,
        require: true
    },
    Tipo_de_Resincia: {
        type: String,
        require: true
    },
    Casa_Propia_Renta: {
        type: String,
        require: true
    },
    Id_de_Vuelo: {
        type: String,
        require: true
    },
    Numero_Pasaporte: {
        type: String,
        require: true
    },
    Numero_Visa: {
        type: String,
        require: true
    },
    Numero_Vuelo: {
        type: String,
        require: true
    },
    Ciudad_de_Origen: {
        type: String,
        require: true
    },
    Ciudad_de_Destino: {
        type: String,
        require: true
    },
    Escala: {
        type: String,
        require: true
    },
}, {
    timestamps: true
})
module.exports = model('Pasajero', Pasajero)

