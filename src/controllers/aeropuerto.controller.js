const aeropuertosCtrl = {}
const Aeropuerto = require('../models/Aeropuerto')

aeropuertosCtrl.renderaeropuertoFormulario = (req, res) => {
    res.render('aeropuerto/nuevo-aeropuerto')
}

aeropuertosCtrl.crearNuevoaeropuerto = async (req, res) => {
    const {
        Nombre,
        Ciudad,
        Direccion_Aeropuerto,
        Telefono,
        Id_Mundial,
        Numero_de_Aeropuerto,
        Capacidad_Maxima_de_Viajes,
        Numero_de_Permiso_de_Ciudad,
        Numero_de_Aerolinias_Establecidas,
        Tamano_Pista_Km_Cuadrados,
        Numero_de_Torres_de_Control,
        Numero_de_Porta_Aviones,
        Tipo_de_Pavimento,
        Senalizaciones_Completas,
        Iluminacion_Completa
    } = req.body
    const newAeropuerto = new Aeropuerto({
        Nombre,
        Ciudad,
        Direccion_Aeropuerto,
        Telefono,
        Id_Mundial,
        Numero_de_Aeropuerto,
        Capacidad_Maxima_de_Viajes,
        Numero_de_Permiso_de_Ciudad,
        Numero_de_Aerolinias_Establecidas,
        Tamano_Pista_Km_Cuadrados,
        Numero_de_Torres_de_Control,
        Numero_de_Porta_Aviones,
        Tipo_de_Pavimento,
        Senalizaciones_Completas,
        Iluminacion_Completa
    })
    await newAeropuerto.save()
    res.redirect('/aeropuertos')
}

aeropuertosCtrl.renderaeropuerto = async (req, res) => {
    const verAeropuertos = await Aeropuerto.find()
    res.render('aeropuerto/all-aeropuertos', { verAeropuertos })
}

aeropuertosCtrl.renderEditaraeropuerto = async (req, res) => {
    const aeropuerto = await Aeropuerto.findById(req.params.id)
    res.render('aeropuerto/edit-aeropuertos', { aeropuerto })
}

aeropuertosCtrl.updateaeropuerto = async (req, res) => {
    const {
        Nombre,
        Ciudad,
        Direccion_Aeropuerto,
        Telefono,
        Id_Mundial,
        Numero_de_Aeropuerto,
        Capacidad_Maxima_de_Viajes,
        Numero_de_Permiso_de_Ciudad,
        Numero_de_Aerolinias_Establecidas,
        Tamano_Pista_Km_Cuadrados,
        Numero_de_Torres_de_Control,
        Numero_de_Porta_Aviones,
        Tipo_de_Pavimento,
        Senalizaciones_Completas,
        Iluminacion_Completa
    } = req.body
    await Aeropuerto.findByIdAndUpdate(req.params.id,
        {
            Nombre,
            Ciudad,
            Direccion_Aeropuerto,
            Telefono,
            Id_Mundial,
            Numero_de_Aeropuerto,
            Capacidad_Maxima_de_Viajes,
            Numero_de_Permiso_de_Ciudad,
            Numero_de_Aerolinias_Establecidas,
            Tamano_Pista_Km_Cuadrados,
            Numero_de_Torres_de_Control,
            Numero_de_Porta_Aviones,
            Tipo_de_Pavimento,
            Senalizaciones_Completas,
            Iluminacion_Completa
        })
    res.redirect('/aeropuertos')
}

aeropuertosCtrl.eliminaraeropuertos = async (req, res) => {
    await Aeropuerto.findByIdAndDelete(req.params.id)
    res.redirect('/aeropuertos')
}
module.exports = aeropuertosCtrl