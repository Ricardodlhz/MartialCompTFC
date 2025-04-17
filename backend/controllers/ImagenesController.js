// controllers/imagenController.js

const imagenService = require("./../services/ImagenesService") // Ajusta la ruta según tu estructura

// Obtener todas las imágenes
const getAllImagenes = async (req, res) => {
    try {
        const imagenes = await imagenService.getImagenes()
        res.status(200).json(imagenes)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Obtener imágenes por id de usuario
const getImagenByUserId = async (req, res) => {
    const { id } = req.params
    try {
        const imagen = await imagenService.getImagenById(id)
        if (!imagen || imagen.length === 0) {
            return res.status(404).json({ message: "No se encontraron imágenes para este usuario" })
        }
        res.status(200).json(imagen)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

// Borrar una imagen por id
const deleteImagen = async (req, res) => {
    const { id } = req.params
    try {
        await imagenService.borrarImagen(id)
        res.status(200).json({ message: "Imagen eliminada correctamente" })
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}

module.exports = {
    getAllImagenes,
    getImagenByUserId,
    deleteImagen
}
