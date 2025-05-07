const ImagenesEventos = require("./../database/models/ImagenesEventos")

// Obtener todas las imágenes
const getImagenes = async () => {
    try {
        return await ImagenesEventos.findAll()
    } catch (error) {
        throw new Error("Error al obtener las imágenes: " + error.message)
    }
}

// Obtener imagen por id
const getImagenById = async (id) => {
    try {
        const imagen = await ImagenesEventos.findByPk(id)
        if (!imagen) throw new Error("Imagen no encontrada")
        return imagen
    } catch (error) {
        throw new Error("Error al obtener la imagen: " + error.message)
    }
}

// Subir nueva imagen
const crearImagen = async ({ imagen, id_evento }) => {
    try {
      const nuevaImagen = await ImagenesEventos.create({
        imagen: imagen,
        id_evento: id_evento,
      });
      return nuevaImagen;
    } catch (error) {
      throw new Error("Error al subir la imagen: " + error.message);
    }
  };

// Actualizar imagen existente
// const actualizarImagenEvento = async (id, nuevaImagenBuffer) => {
//     try {
//         const imagen = await ImagenesEventos.findByPk(id)
//         if (!imagen) throw new Error("Imagen no encontrada")

//         imagen.imagen = nuevaImagenBuffer
//         await imagen.save()

//         return imagen
//     } catch (error) {
//         throw new Error("Error al actualizar la imagen: " + error.message)
//     }
// }

// Borrar imagen por id
const borrarImagen = async (id) => {
    try {
        const imagen = await ImagenesEventos.findByPk(id)
        if (!imagen) throw new Error("Imagen no encontrada")

        await imagen.destroy()
        return { mensaje: "Imagen eliminada correctamente" }
    } catch (error) {
        throw new Error("Error al eliminar la imagen: " + error.message)
    }
}

module.exports = {
    getImagenes,
    getImagenById,
    crearImagen,
    borrarImagen
}
