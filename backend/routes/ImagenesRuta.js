// routes/imagenes.js

const express = require('express')
const router = express.Router()
const imagenController = require('./../controllers/ImagenesController') // Ajusta la ruta si es necesario

// GET /imagenes - Obtener todas las imágenes
router.get('/', imagenController.getAllImagenes)

// GET /imagenes/usuario/:id - Obtener imágenes por ID de usuario
router.get('/usuario/:id', imagenController.getImagenByUserId)

router.post('/',imagenController.crearImagen)
// DELETE /imagenes/:id - Eliminar una imagen por su ID
router.delete('/:id', imagenController.deleteImagen)

module.exports = router
