const { Router } = require('express')
const router = Router()

const { 
    renderPasajeroFormulario, 
    crearNuevoPasajero, 
    renderPasajero, 
    renderEditarPasajero, 
    updatePasajero, 
    eliminarPasajeros 
} = require('../controllers/pasajeros.controller')

//nuevo pasajero
router.get('/pasajeros/add', renderPasajeroFormulario)
router.post('/pasajeros/nuevo-pasajero', crearNuevoPasajero)

// get todos pasajero
router.get('/pasajeros/', renderPasajero)

// editar pasajero
router.get('/pasajeros/editar/:id', renderEditarPasajero)
router.put('/pasajeros/editar/:id', updatePasajero)

//eliminar
router.delete('/pasajeros/delete/:id', eliminarPasajeros)
module.exports = router