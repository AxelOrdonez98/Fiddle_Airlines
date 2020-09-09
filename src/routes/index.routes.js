const { Router } = require('express')
const router = Router()

const {renderIndex, renderPasajero, renderCapitan, renderAerolinea, renderAeropuerto, renderPoliticas} = require('../controllers/index.controller')

router.get('/', renderIndex)

router.get('/pasajero', renderPasajero)

router.get('/capitan', renderCapitan)

router.get('/aerolinea', renderAerolinea)

router.get('/aeropuerto', renderAeropuerto)

router.get('/politicas', renderPoliticas)

module.exports = router