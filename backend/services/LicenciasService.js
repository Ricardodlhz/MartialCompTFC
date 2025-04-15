const Licencia=require("./../database/models/Licencias")

//Seleccionar todas las licencias
const getLicencias=async()=>{
    try {
        return await Licencia.findAll()
    } catch (error) {
        throw new Error("Error al seleccionar todas las licencias: " + error.message)
    }
}


//Seleccionar la licencia dado el id del deporte
const getLicenciaById=async(id)=>{
    const licencia=await Licencia.findAll({
        where:{id_deporte:id}
    })

    return licencia
}

module.exports={
    getLicencias,
    getLicenciaById
}

