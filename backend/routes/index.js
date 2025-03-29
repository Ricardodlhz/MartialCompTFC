const express=require("express")
const router=express.Router()
const usuarioRuta=require('./UsuariosRuta')
//Rutas generales 

router.use("/usuario",usuarioRuta)


//Usar rutas

module.exports=router