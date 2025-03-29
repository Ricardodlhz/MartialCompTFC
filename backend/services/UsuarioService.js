const Usuario=require("./../database/models/Usuarios")
const bcrypt=require("bcrypt")


const getUsuarios=async()=>{
    try{
        return await Usuario.findAll()
    }catch(error){
        throw new Error("Error al seleccionar todos los usuarios: "+error.message)
    }
}
const getUsuarioById=async(id)=>{
    
}
module.exports={
    getUsuarios,
    getUsuarioById
}