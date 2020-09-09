const capitansCtrl = {}
const Capitan = require('../models/Capitan')

capitansCtrl.rendercapitanFormulario = (req, res) => {
    res.render('capitan/nuevo-capitan')
}

capitansCtrl.crearNuevocapitan = async (req, res) => {
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
        Tipo_De_Aprendizaje_Vuelo,
        Numero_De_Cedula_Profecional,
        Pais,
        Ciudad,
        Calle,
        Numero_de_Domicilio,
        Codigo_Postal,
        Colinia,
        Referencia_Calle_1,
        Referencia_Calle_2,
        Tipo_de_Resincia,
        Casa_Propia_Renta
    } = req.body
    const newCapitan = new Capitan({
        Nombre,
        Apellidos,
        Sexo,
        Tipo_de_Sangre,
        Vacunas,
        Donante_de_Organos,
        Religion,
        Nacionalidad,
        Estado_Civil,
        Tipo_De_Aprendizaje_Vuelo,
        Numero_De_Cedula_Profecional,
        Pais,
        Ciudad,
        Calle,
        Numero_de_Domicilio,
        Codigo_Postal,
        Colinia,
        Referencia_Calle_1,
        Referencia_Calle_2,
        Tipo_de_Resincia,
        Casa_Propia_Renta
    })
    await newCapitan.save()
    res.redirect('/capitanes')
}

capitansCtrl.rendercapitan = async (req, res) => {
    const verCapitanes = await Capitan.find()
    res.render('capitan/all-capitanes', {verCapitanes})
}

capitansCtrl.renderEditarcapitan = async (req, res) => {
    const capitan = await Capitan.findById(req.params.id)
    res.render('capitan/edit-capitanes', {capitan})
}

capitansCtrl.updatecapitan = async (req, res) => {
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
        Tipo_De_Aprendizaje_Vuelo,
        Numero_De_Cedula_Profecional,
        Pais,
        Ciudad,
        Calle,
        Numero_de_Domicilio,
        Codigo_Postal,
        Colinia,
        Referencia_Calle_1,
        Referencia_Calle_2,
        Tipo_de_Resincia,
        Casa_Propia_Renta } = req.body
    await Capitan.findByIdAndUpdate(req.params.id, {
        Nombre,
        Apellidos,
        Sexo,
        Tipo_de_Sangre,
        Vacunas,
        Donante_de_Organos,
        Religion,
        Nacionalidad,
        Estado_Civil,
        Tipo_De_Aprendizaje_Vuelo,
        Numero_De_Cedula_Profecional,
        Pais,
        Ciudad,
        Calle,
        Numero_de_Domicilio,
        Codigo_Postal,
        Colinia,
        Referencia_Calle_1,
        Referencia_Calle_2,
        Tipo_de_Resincia,
        Casa_Propia_Renta
    })
    res.redirect('/capitanes')
}

capitansCtrl.eliminarcapitans = async (req, res) => {
    await Capitan.findByIdAndDelete(req.params.id)
    res.redirect('/capitanes')
}
module.exports = capitansCtrl