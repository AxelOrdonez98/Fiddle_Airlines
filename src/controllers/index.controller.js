const indexCtrl = {}

indexCtrl.renderIndex = (req, res) => {
    res.render('index')
}

indexCtrl.renderPasajero = (req, res) => {
    res.render('pasajero')
}

indexCtrl.renderCapitan = (req, res) => {
    res.render('capitan')
}

indexCtrl.renderAerolinea = (req, res) => {
    res.render('aerolinea')
}

indexCtrl.renderAeropuerto = (req, res) => {
    res.render('aeropuerto')
}

indexCtrl.renderPoliticas = (req, res) => {
    res.render('politicas')
}

module.exports = indexCtrl