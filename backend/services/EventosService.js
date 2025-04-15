const Eventos=require("./../database/models/Eventos")

//Recoger todos los eventos
const getEventos=async()=>{
    try{
        return await Eventos.findAll()
    }catch(error){
        throw new Error("Error al seleccionar todos los eventos: "+error.message)
    }
}

//Recoger el evento dado por id
const getEventoById=async(id)=>{
    try{
        return await Eventos.findByPk(id)
    }catch(error){
        throw new Error("Error al seleccionar el evento dado: "+error.message)
    }
}


//Modificar el evento dado por id
const actualizarEvento=async(id,eventoData)=>{
    try{
        const evento=await Eventos.findByPk(id)
        if(!evento){
            throw new Error("Evento no encontrado")
        }

        return await evento.update(eventoData)
    }catch(error){
        throw new Error("Error al actualizar el evento "+error.message)
    }
}
//Borrar el evento dado por id
const borrarEvento=async(id)=>{
    try{
        const evento=await Eventos.findByPk(id)
        if(!evento){
            throw new Error("Evento no encontrado")
        }
        return await evento.destroy(id)
    }catch(error){
        throw new Error("Error al borrar el evento "+error.message)
    }
}

module.exports={
    getEventos,
    getEventoById,
    actualizarEvento,
    borrarEvento
}