const router = require('express').Router();
const usuarioController=require('./../controllers/UsuariosController')

router.get('/',usuarioController.getUsuarios)

module.exports = router;