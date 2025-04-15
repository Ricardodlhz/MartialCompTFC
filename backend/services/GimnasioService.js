const Gimnasio = require("./../database/models/Gimnasios")

//Recojo todos los Gimnasios
const getGimnasios = async () => {
    try {
        return await Gimnasio.findAll()
    } catch (error) {
        throw new Error("Error al seleccionar todos los gimnasios: " + error.message)
    }
}

//Recojo el gimnasio dado por id
const getGimnasioById = async (id) => {
    try {
        return await Gimnasio.findByPk(id)
    } catch (error) {
        throw new Error("Error al seleccionar el gimnasio dado: " + error.message)
    }
}

//Creo un nuevo gimnasio(solo puede hacerlo quien tenga el rol de entrenador)
const crearGimnasio = async (gimnasioData) => {
    try {
        return await Gimnasio.create(gimnasioData)
    } catch (error) {
        throw new Error("Error al crear el gimnasio: " + error.message)
    }
}

//Actualizo un gimnasio dado por id
const actualizarGimnasio = async (id, gimnasioData) => {
    try {
        const gimnasio = await Gimnasio.findByPk(id)

        if (!gimnasio) {
            throw new Error("Gimnasio no encontrado: " + error.message)
        }
        return await gimnasio.update(gimnasioData)
    }catch(error){
        throw new Error("Error al modificar el gimnasio: " + error.message); 
    }
}


//Borro el gimnasio dado por id
const borrarGimnasio=async(id)=>{
    try {
        const gimnasio = await Gimnasio.findByPk(id)

        if (!gimnasio) {
            throw new Error("Gimnasio no encontrado: " + error.message)
        }
        return await gimnasio.destroy(id)
    }catch(error){
        throw new Error("Error al borrar el gimnasio: " + error.message); 
    }
}


module.exports={
    getGimnasios,
    getGimnasioById,
    crearGimnasio,
    actualizarGimnasio,
    borrarGimnasio
}