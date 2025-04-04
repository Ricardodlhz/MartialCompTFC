const express=require("express")
const router=express.Router()
const usuarioRuta=require('./UsuariosRuta')
const deportesRuta=require("./DeportesRuta")
//Rutas generales 

router.use("/usuario",usuarioRuta)
router.use("/deportes",deportesRuta)

//Usar rutas

module.exports=router