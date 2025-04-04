const router = require('express').Router();
const DeportesRuta=require('./../controllers/DeportesController')

//Rutas para deportes

//GET POST Y DELETE
router.get("/",DeportesRuta.getDeportes)
router.get("/:id",DeportesRuta.getDeporteById)
router.post("/",DeportesRuta.crearDeporte)
router.delete("/:id",DeportesRuta.borrarDeporte)
module.exports=router