const { Router } = require('express')
const router = Router()

const { 
    rendercapitanFormulario, 
    crearNuevocapitan, 
    rendercapitan, 
    renderEditarcapitan, 
    updatecapitan, 
    eliminarcapitans 
} = require('../controllers/capitan.controller')

//nuevo capitan
router.get('/capitanes/add', rendercapitanFormulario)
router.post('/capitanes/nuevo-capitan', crearNuevocapitan)

// get todos capitan
router.get('/capitanes/', rendercapitan)

// editar capitan
router.get('/capitanes/editar/:id', renderEditarcapitan)
router.put('/capitanes/editar/:id', updatecapitan)

//eliminar
router.delete('/capitanes/delete/:id', eliminarcapitans)
module.exports = router