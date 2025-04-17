// routes/licencias.js

const express = require('express')
const router = express.Router()
const licenciaController = require('./../controllers/LicenciasController') // Asegúrate de que el path sea correcto

// GET /licencias - Obtener todas las licencias
router.get('/', licenciaController.getAllLicencias)

// GET /licencias/deporte/:id - Obtener licencias por ID del deporte
router.get('/deporte/:id', licenciaController.getLicenciaByDeporteId)

module.exports = router
