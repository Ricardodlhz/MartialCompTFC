const Imagen = require("./../database/models/Imagenes")
//Recoger todas las imagenes
const getImagenes = async () => {
    try {
        return await Imagen.findAll()
    } catch (error) {
        throw new Error("Error al seleccionar todos las imagenes: " + error.message)
    }
}

//Elegir la imagen dada por el id de usuario
const getImagenById = async (id) => {
    const imagen = await Imagen.findOne({
        where: { id_usuario: id }
    })

    return imagen
}

const crearImagen = async (imagenData) => {
    try {
      return await Imagen.create(imagenData);
    } catch (error) {
      throw new Error("Error al crear la imagen: " + error.message);
    }
  };

//Borrar imagen
const borrarImagen = async (id) => {
    try {
        const imagen = await Imagen.findByPk(id)
        if (!imagen) {
            throw new Error("La imagen no existe");
        }

        return await imagen.destroy(id)
    } catch (error) {
        throw new Error("Error al borrar la imagen: "+error.message)
    }
}


module.exports={
    getImagenes,
    crearImagen,
    getImagenById,
    borrarImagen
}