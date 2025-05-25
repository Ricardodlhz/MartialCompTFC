// routes/eventos.js

const express = require('express')
const router = express.Router()
const eventController = require('./../controllers/EventosController') 

// GET /eventos - Obtener todos los eventos
 router.get('/', eventController.getEventos)

// // GET /eventos/:id - Obtener evento por ID
router.get('/:id', eventController.getEventById)

//GET /eventos/id_deporte
router.get("/evento_deporte/:id_deporte",eventController.getEventoById_Deporte)
//POST 
router.post("/",eventController.crearEvento)

// PUT /eventos/:id - Actualizar un evento por ID
router.put('/:id', eventController.actualizarEvento)

// DELETE /eventos/:id - Borrar un evento por ID
router.delete('/:id', eventController.borrarEvento)

module.exports = router
