const { Router } = require('express')
const router = Router()

const { 
    renderaerolineaFormulario, 
    crearNuevoaerolinea, 
    renderaerolinea, 
    renderEditaraerolinea, 
    updateaerolinea, 
    eliminaraerolineas 
} = require('../controllers/aerolinea.controller')

//nuevo aerolinea
router.get('/aerolineas/add', renderaerolineaFormulario)
router.post('/aerolineas/nueva-aerolinea', crearNuevoaerolinea)

// get todos aerolinea
router.get('/aerolineas/', renderaerolinea)

// editar aerolinea
router.get('/aerolineas/editar/:id', renderEditaraerolinea)
router.put('/aerolineas/editar/:id', updateaerolinea)

//eliminar
router.delete('/aerolineas/delete/:id', eliminaraerolineas)
module.exports = router