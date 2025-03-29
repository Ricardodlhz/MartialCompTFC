const bcrypt = require("bcrypt");

const usuarioService=require('./../services/UsuarioService')

const getUsuarios=async(req,res)=>{
     try {
        const usuarios = await usuarioService.getUsuarios()
        res.status(200).json(usuarios);
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

module.exports={
    getUsuarios
}