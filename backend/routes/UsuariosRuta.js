const router = require('express').Router();
const usuarioController=require('./../controllers/UsuariosController')

router.get('/',usuarioController.getUsuarios)
router.get('/:email',usuarioController.getUsuarioByEmail)
router.post('/',usuarioController.crearUsuario)
router.put('/:id',usuarioController.actualizarUsuario)
router.put('/resetpass/:id',usuarioController.actualizarContraseña)
router.delete('/:id',usuarioController.eliminarUsuario)
router.post('/login',usuarioController.comprobarUsuario)
module.exports = router;