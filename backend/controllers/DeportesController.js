const deporteService = require("./../services/DeportesService")


//Obtener todos los deportes
const getDeportes = async (req, res) => {
    try {
        const deportes = await deporteService.getDeportes()
        res.status(200).json(deportes)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

//Obtener el deportes dado por id
const getDeporteById = async (req, res) => {
    try {
        const deportes = await deporteService.getDeportesById(req.params.id)
        if(deportes){
            res.status(200).json(deportes)
        }else{
            res.status(404).json({ message: "Deporte no encontrado" });
        }
     
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}


//Crear deporte 
const crearDeporte=async(req,res)=>{
     try {
        console.log("Request body received:", req.body);
          const deporte = await deporteService.crearDeporte({
              nombre_deporte: req.body.nombre_deporte, 
          });
    
          res.status(201).json(deporte);
      } catch (error) {
          res.status(500).json({ error: error.message });
      }
}

//Eliminar deporte
const borrarDeporte=async(req,res)=>{
    try {
        const deleted = await deporteService.borrarDeporte(req.params.id)
        if (deleted) {
          res.status(204).json({ message: "Deporte eliminado" });
        } else {
          res.status(404).json({ message: "Deporte no encontrado" });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports={
    getDeportes,
    getDeporteById,
    crearDeporte,
    borrarDeporte,
}