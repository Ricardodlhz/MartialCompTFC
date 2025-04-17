// routes/gimnasios.js

const express = require('express')
const router = express.Router()
const gimnasioController = require('./../controllers/GimnasiosController') 

// GET /gimnasios - Obtener todos los gimnasios
router.get('/', gimnasioController.getAllGimnasios)

// GET /gimnasios/:id - Obtener un gimnasio por ID
router.get('/:id', gimnasioController.getGimnasioById)

// POST /gimnasios - Crear un nuevo gimnasio
router.post('/', gimnasioController.createGimnasio)

// PUT /gimnasios/:id - Actualizar un gimnasio
router.put('/:id', gimnasioController.updateGimnasio)

// DELETE /gimnasios/:id - Borrar un gimnasio
router.delete('/:id', gimnasioController.deleteGimnasio)

module.exports = router
