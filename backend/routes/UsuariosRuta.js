const router = require('express').Router();
const usuarioController=require('./../controllers/UsuariosController')

router.get('/',usuarioController.getUsuarios)
router.get('/:id',usuarioController.getUsuarioById)
router.post('/',usuarioController.crearUsuario)
router.put('/:id',usuarioController.actualizarUsuario)
router.delete('/:id',usuarioController.eliminarUsuario)
router.post('/login',usuarioController.comprobarUsuario)
module.exports = router;