const Deportes=require("./../database/models/Deportes")

//Recojo todos los deportes
const getDeportes=async()=>{
    try{
        return await Deportes.findAll()
    }catch(error){
        throw new Error("Error al seleccionar todos los deportes: "+error.message)
    }
}

//Recojo el deporte dado por id
const getDeportesById=async(id)=>{
    try{
        return await Deportes.findByPk(id)
    }catch(error){
        throw new Error("Error al seleccionar el deporte indicado: "+error.message)
    }
}

//Creo un deporte nuevo
const crearDeporte=async(deporteData)=>{
    try{
        return await Deportes.create(deporteData)
    }catch(error){
        throw new Error("Error al crear el deporte: "+error.message)
    }
}

//Borrar el deporte dado por id
const borrarDeporte=async(id)=>{
    try{
        const deporte=await Deportes.findByPk(id)

        if(!deporte){
            throw new Error("El deporte no existe");
        }

        return await deporte.destroy(id)
    }catch(error){
        throw new Error("Error al seleccionar el deporte indicado: "+error.message)
    }
}


module.exports={
    getDeportes,
    getDeportesById,
    crearDeporte,
    borrarDeporte,
}