const eventService=require("./../services/EventosService")

//Recoger todos los eventos
const getEventos=async(req,res)=>{
    try{
        const eventos=await eventService.getEventos()

        res.status(200).json(eventos)
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

//Recoger el evento dado por id
const getEventById=async(req,res)=>{
    try{
        const eventos=await eventService.getEventoById(req.params.id)
        if(eventos){
            res.status(200).json(eventos)
        }else{
            res.status(500).json({message:"Evento no encontrado"})
        }
    }catch(error){
        res.status(500).json({error:error.message})
    }
}


//Modificar el evento dado por id
const actualizarEvento=async(req,res)=>{
    try{
        const {id}=req.params

        const updatedEvent=await eventService.actualizarEvento(id,{
            nombre_evento:req.body.nombre_evento,
            fecha_evento:req.body.fecha_evento,
            deporte_id:req.body.deporte_id
        })

        if (updatedEvent) {
            res.status(200).json(updatedEvent);
          } else {
            res.status(404).json({ message: "Evento no encontrado" });
          }
        
    }catch(error){
        res.status(500).json({error:error.message})
    }
}

//Borrar el evento dado por id
const borrarEvento=async(req,res)=>{
    try{
        const deleted=await eventService.borrarEvento(req.params.id)
        if (deleted) {
            res.status(204).json({ message: "Evento eliminado" });
          } else {
            res.status(404).json({ message: "Evento no encontrado" });
          }
    }catch(error){
        res.status(500).json({ error: error.message });
    }
}

module.exports={
    getEventos,
    getEventById,
    actualizarEvento,
    borrarEvento
}