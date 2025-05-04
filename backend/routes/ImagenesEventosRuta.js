const express = require('express')
const router = express.Router()
const imagenEventoController = require('./../controllers/ImagenesEventosController')

// GET /imagenes - Obtener todas las imágenes
router.get('/', imagenEventoController.getAllImagenes)

// GET /imagenes/usuario/:id - Obtener imágenes por ID de usuario
router.get('/usuario/:id', imagenEventoController.getImagenByUserId)

router.post('/',imagenEventoController.crearImagen)
// DELETE /imagenes/:id - Eliminar una imagen por su ID
router.delete('/:id', imagenEventoController.deleteImagen)

module.exports = router