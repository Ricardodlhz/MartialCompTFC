const router = require('express').Router();
const Usuarios = require('./../database/models/Usuarios');
const Deportes = require('./../database/models/Deportes');

// POST /federarUsuario
router.post('/', async (req, res) => {
  const { id_usuario, id_deporte } = req.body;

  try {
    // Verificar si usuario y deporte existen
    const usuario = await Usuarios.findByPk(id_usuario);
    const deporte = await Deportes.findByPk(id_deporte);

    if (!usuario || !deporte) {
      return res.status(404).json({ message: 'Usuario o Deporte no encontrado' });
    }

    // Federar al usuario en el deporte (insert en tabla 'Federados')
    await usuario.addDeporte(deporte);

    res.status(201).json({ message: 'Usuario federado correctamente al deporte' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al federar usuario al deporte' });
  }
});

module.exports = router;