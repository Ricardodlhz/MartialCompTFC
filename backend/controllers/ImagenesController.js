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
        res.set('Content-Type', 'image/jpeg'); // o image/png según lo que guardes
        res.send(imagen.imagen); // envías el binario directo
        // res.status(200).json(imagen)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
// Crear una nueva imagen
const crearImagen = async (req, res) => {
    try {
      if (!req.file) {
        return res.status(400).json({ error: "No se subió ninguna imagen" });
      }
  
      // Guardar la imagen en la base de datos como binario (BLOB)
      const createdImagen = await imagenService.crearImagen({
        imagen: req.file.buffer, // Aquí guardamos el binario de la imagen
        id_usuario: req.body.id_usuario,
      });
  
      res.status(201).json({ mensaje: "Imagen subida con éxito", id: createdImagen.id });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
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
    crearImagen,
    getImagenByUserId,
    deleteImagen
}
