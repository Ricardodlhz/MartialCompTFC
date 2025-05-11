const router = require('express').Router();
const Usuario=require("./../database/models/Usuarios")
const Evento=require("./../database/models/Eventos")
// POST /registrarUsuarioEvento
router.post('/', async (req, res) => {
  const { id_usuario, id_evento } = req.body;

  try {
    // Verificar si usuario y evento existen
    const usuario = await Usuario.findByPk(id_usuario);
    const evento = await Evento.findByPk(id_evento);

    // if (!usuario || !evento) {
    //   return res.status(404).json({ message: 'Usuario o Evento no encontrado' });
    // }

    // Registrar el evento al usuario
    await usuario.addEvento(evento);

    res.status(201).json({ message: 'Usuario registrado al evento correctamente' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al registrar usuario al evento' });
  }
});

module.exports = router;