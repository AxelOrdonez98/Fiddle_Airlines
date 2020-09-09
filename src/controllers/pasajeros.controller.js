const pasajerosCtrl = {}
const Pasajero = require('../models/Pasajero')

pasajerosCtrl.renderPasajeroFormulario = (req, res) => {
    res.render('pasajero/nuevo-pasajero')
}

pasajerosCtrl.crearNuevoPasajero = async (req, res) => {
    const {
        Nombre,
        Apellidos,
        Sexo,
        Tipo_de_Sangre,
        Vacunas,
        Donante_de_Organos,
        Religion,
        Nacionalidad,
        Estado_Civil,
        Pais,
        Ciudad,
        Calle,
        Numero_de_Domicilio,
        Codigo_Postal,
        Colinia,
        Referencia_Calle_1,
        Referencia_Calle_2,
        Tipo_de_Resincia,
        Casa_Propia_Renta,
        Id_de_Vuelo,
        Numero_Pasaporte,
        Numero_Visa,
        Numero_Vuelo,
        Ciudad_de_Origen,
        Ciudad_de_Destino,
        Escala
    } = req.body
    const newPasajero = new Pasajero({
        Nombre,
        Apellidos,
        Sexo,
        Tipo_de_Sangre,
        Vacunas,
        Donante_de_Organos,
        Religion,
        Nacionalidad,
        Estado_Civil,
        Pais,
        Ciudad,
        Calle,
        Numero_de_Domicilio,
        Codigo_Postal,
        Colinia,
        Referencia_Calle_1,
        Referencia_Calle_2,
        Tipo_de_Resincia,
        Casa_Propia_Renta,
        Id_de_Vuelo,
        Numero_Pasaporte,
        Numero_Visa,
        Numero_Vuelo,
        Ciudad_de_Origen,
        Ciudad_de_Destino,
        Escala
    })
    await newPasajero.save()
    res.redirect('/pasajeros')
}

pasajerosCtrl.renderPasajero = async (req, res) => {
    const verPasajeros = await Pasajero.find()
    res.render('pasajero/all-pasajeros', { verPasajeros })
}

pasajerosCtrl.renderEditarPasajero = async (req, res) => {
    const pasajero = await Pasajero.findById(req.params.id)
    res.render('pasajero/edit-pasajeros', {pasajero})
}

pasajerosCtrl.updatePasajero = async (req, res) => {
    const { Nombre,
        Apellidos,
        Sexo,
        Tipo_de_Sangre,
        Vacunas,
        Donante_de_Organos,
        Religion,
        Nacionalidad,
        Estado_Civil,
        Pais,
        Ciudad,
        Calle,
        Numero_de_Domicilio,
        Codigo_Postal,
        Colinia,
        Referencia_Calle_1,
        Referencia_Calle_2,
        Tipo_de_Resincia,
        Casa_Propia_Renta,
        Id_de_Vuelo,
        Numero_Pasaporte,
        Numero_Visa,
        Numero_Vuelo,
        Ciudad_de_Origen,
        Ciudad_de_Destino,
        Escala } = req.body
    await Pasajero.findByIdAndUpdate(req.params.id, {
        Nombre,
        Apellidos,
        Sexo,
        Tipo_de_Sangre,
        Vacunas,
        Donante_de_Organos,
        Religion,
        Nacionalidad,
        Estado_Civil,
        Pais,
        Ciudad,
        Calle,
        Numero_de_Domicilio,
        Codigo_Postal,
        Colinia,
        Referencia_Calle_1,
        Referencia_Calle_2,
        Tipo_de_Resincia,
        Casa_Propia_Renta,
        Id_de_Vuelo,
        Numero_Pasaporte,
        Numero_Visa,
        Numero_Vuelo,
        Ciudad_de_Origen,
        Ciudad_de_Destino,
        Escala
    })
    res.redirect('/pasajeros')
}

pasajerosCtrl.eliminarPasajeros = async (req, res) => {
    await Pasajero.findByIdAndDelete(req.params.id)
    res.redirect('/pasajeros')
}
module.exports = pasajerosCtrl