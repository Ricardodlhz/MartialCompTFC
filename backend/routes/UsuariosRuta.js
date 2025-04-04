const router = require('express').Router();
const usuarioController=require('./../controllers/UsuariosController')

router.get('/',usuarioController.getUsuarios)
router.get('/:id',usuarioController.getUsuarioById)

module.exports = router;