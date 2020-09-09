const { Router } = require('express')
const router = Router()

const { 
    renderaeropuertoFormulario, 
    crearNuevoaeropuerto, 
    renderaeropuerto, 
    renderEditaraeropuerto, 
    updateaeropuerto, 
    eliminaraeropuertos 
} = require('../controllers/aeropuerto.controller')

//nuevo aeropuerto
router.get('/aeropuertos/add', renderaeropuertoFormulario)
router.post('/aeropuertos/nuevo-aeropuerto', crearNuevoaeropuerto)

// get todos aeropuerto
router.get('/aeropuertos/', renderaeropuerto)

// editar aeropuerto
router.get('/aeropuertos/editar/:id', renderEditaraeropuerto)
router.put('/aeropuertos/editar/:id', updateaeropuerto)

//eliminar
router.delete('/aeropuertos/delete/:id', eliminaraeropuertos)
module.exports = router