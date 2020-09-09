const aerolineasCtrl = {}
const Aerolinea = require('../models/Aerolinea')

aerolineasCtrl.renderaerolineaFormulario = (req, res) => {
    res.render('aerolinea/nueva-aerolinea')
}

aerolineasCtrl.crearNuevoaerolinea = async (req, res) => {
    const {
        Nombre_Aerolinia,
        Numero_de_Avion,
        Horas_de_vuelo,
        Capacidad_de_Combustible,
        Aerolinia_Perteneciente,
        Numero_de_Reparaciones,
        Capacidad_Maxima_de_Pasajeros,
        Capacidad_Maxima_de_Peso_Kg,
        Tamano_Avion_MTS_Cuadrados,
        Ciudad_de_Origen,
        Tipo_de_Avion,
        Numero_de_Sobrecargo_Contratados,
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
        Tipos_de_Vuelo,
        Numero_de_Permiso
    } = req.body
    const newAerolinea = new Aerolinea({
        Nombre_Aerolinia,
        Numero_de_Avion,
        Horas_de_vuelo,
        Capacidad_de_Combustible,
        Aerolinia_Perteneciente,
        Numero_de_Reparaciones,
        Capacidad_Maxima_de_Pasajeros,
        Capacidad_Maxima_de_Peso_Kg,
        Tamano_Avion_MTS_Cuadrados,
        Ciudad_de_Origen,
        Tipo_de_Avion,
        Numero_de_Sobrecargo_Contratados,
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
        Tipos_de_Vuelo,
        Numero_de_Permiso
    })
    await newAerolinea.save()
    res.redirect('/aerolineas')
}

aerolineasCtrl.renderaerolinea = async (req, res) => {
    const verAerolineas = await Aerolinea.find()
    res.render('aerolinea/all-aerolineas', { verAerolineas })
}

aerolineasCtrl.renderEditaraerolinea = async (req, res) => {
    const aerolinea = await Aerolinea.findById(req.params.id)
    res.render('aerolinea/edit-aerolineas', {aerolinea})
}

aerolineasCtrl.updateaerolinea = async (req, res) => {
    const {
        Nombre_Aerolinia,
        Numero_de_Avion,
        Horas_de_vuelo,
        Capacidad_de_Combustible,
        Aerolinia_Perteneciente,
        Numero_de_Reparaciones,
        Capacidad_Maxima_de_Pasajeros,
        Capacidad_Maxima_de_Peso_Kg,
        Tamano_Avion_MTS_Cuadrados,
        Ciudad_de_Origen,
        Tipo_de_Avion,
        Numero_de_Sobrecargo_Contratados,
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
        Tipos_de_Vuelo,
        Numero_de_Permiso
    } = req.body
    await Aerolinea.findByIdAndUpdate(req.params.id, {
        Nombre_Aerolinia,
        Numero_de_Avion,
        Horas_de_vuelo,
        Capacidad_de_Combustible,
        Aerolinia_Perteneciente,
        Numero_de_Reparaciones,
        Capacidad_Maxima_de_Pasajeros,
        Capacidad_Maxima_de_Peso_Kg,
        Tamano_Avion_MTS_Cuadrados,
        Ciudad_de_Origen,
        Tipo_de_Avion,
        Numero_de_Sobrecargo_Contratados,
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
        Tipos_de_Vuelo,
        Numero_de_Permiso
    })
    res.redirect('/aerolineas')
}

aerolineasCtrl.eliminaraerolineas = async (req, res) => {
    await Aerolinea.findByIdAndDelete(req.params.id)
    res.redirect('/aerolineas')
}
module.exports = aerolineasCtrl