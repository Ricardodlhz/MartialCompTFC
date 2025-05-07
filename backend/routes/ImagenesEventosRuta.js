const express = require('express')
const router = express.Router()
const imagenEventoController = require('./../controllers/ImagenesEventosController')
const multer = require('multer');
const upload = multer(); // o podés configurar storage si querés guardar en disco
// GET /imagenes - Obtener todas las imágenes
router.get('/', imagenEventoController.getAllImagenes)

// GET /imagenes/usuario/:id - Obtener imágenes por ID de usuario
router.get('/usuario/:id', imagenEventoController.getImagenByUserId)

router.post('/', upload.single('imagen'), imagenEventoController.crearImagen);


// DELETE /imagenes/:id - Eliminar una imagen por su ID
router.delete('/:id', imagenEventoController.deleteImagen)

module.exports = router