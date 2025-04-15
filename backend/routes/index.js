const express=require("express")
const router=express.Router()
const usuarioRuta=require('./UsuariosRuta')
const deportesRuta=require("./DeportesRuta")
const eventosRuta=require("./EventosRuta")
const gimansioRuta=require("./GimnasiosRuta")
const imagenesRuta=require("./ImagenesRuta")
const licenciasRuta=require("./LicenciasRuta")

//rutas
router.use("/usuario",usuarioRuta)
router.use("/deportes",deportesRuta)
// router.use("/eventos",eventosRuta)
// router.use("/gimnasios",gimansioRuta)
// router.use("/imagenes",imagenesRuta)
// router.use("/licencias",licenciasRuta)


module.exports=router