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

//Recgoer los eventos dado un deporte
const getEventoById_Deporte = async (req, res) => {
  try {
     console.log("ID deporte recibido:", req.params.id_deporte)
    const eventos = await eventService.getEventoById_Deporte(req.params.id_deporte)

    if (eventos && eventos.length > 0) {
      res.status(200).json(eventos)
    } else {
      res.status(404).json({ message: "Eventos no encontrados" })
    }
  } catch (error) {
    res.status(500).json({ error: error.message })
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

// Crear un nuevo evento
const crearEvento = async (req, res) => {
    try {
        const nuevoEvento = await eventService.crearEvento({
            nombre_evento: req.body.nombre_evento,
            fecha_evento: req.body.fecha_evento,
            id_deporte: req.body.id_deporte
        })
        res.status(201).json(nuevoEvento)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}
module.exports={
    getEventos,
    getEventById,
    getEventoById_Deporte,
    actualizarEvento,
    borrarEvento,
    crearEvento
}