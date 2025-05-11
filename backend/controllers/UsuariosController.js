const bcrypt = require("bcrypt");

const usuarioService = require('./../services/UsuarioService')
// Obtener todos los usuarios
const getUsuarios = async (req, res) => {
  try {
    const usuarios = await usuarioService.getUsuarios()
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
//Obtener el usuario indicado por email
const getUsuarioByEmail = async (req, res) => {
  try {
    const usuario = await usuarioService.getUsuarioByEmail(req.params.email)
    if (usuario) {
      res.status(200).json(usuario);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Crear un usuario nuevo
const crearUsuario = async (req, res) => {
  try {
    console.log("Request body received:", req.body);
      if (!req.body.password) {
          return res.status(400).json({ error: "La contraseña es requerida" });
      }

      // const hashedPassword = await bcrypt.hash(req.body.password, 10);


      const usuario = await usuarioService.crearUsuario({
        rol:req.body.rol,
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          fecha_nac: req.body.fecha_nac,
          localidad: req.body.localidad,
          provincia: req.body.provincia,
          cp: req.body.cp,
          num_tlf: req.body.num_tlf,
          email:req.body.email,
          password: req.body.password, 
          id_academia: req.body.id_academia,
      });

      res.status(201).json(usuario);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
};

//Actualizar un usuario dado el id
const actualizarUsuario = async (req, res) => {
  try {
    const { id } = req.params

    const updatedUsuario = await usuarioService.actualizarUsuario(id, {
      nombre: req.body.nombre,
      apellido: req.body.apellido,
      fecha_nac: req.body.fecha_nac,
      localidad: req.body.localidad,
      provincia: req.body.provincia,
      cp: req.body.cp,
      num_tlf: req.body.num_tlf,
      // password: bcrypt.hash(req.body.password, 10),
      password:req.body.password,
      id_academia: req.body.id_academia,
    })

    if (updatedUsuario) {
      res.status(200).json(updatedUsuario);
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Eliminar un usuario
const eliminarUsuario = async (req, res) => {
  try {
    const deleted = await usuarioService.borrarUsuario(req.params.id)
    if (deleted) {
      res.status(204).json({ message: "Usuario eliminado" });
    } else {
      res.status(404).json({ message: "Usuario no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

//Comprobar login
const comprobarUsuario = async (req, res) => {
  try {
    console.log("Request body:", req.body)
    const { email, password } = req.body

    if (!email || !password) {
      return res.status(400).json({ error: "Faltan datos en la petición" });
    }

    const resultado = await usuarioService.comprobarUsuario(email, password)

    return res.status(resultado.status).json(resultado)
  } catch (error) {
    console.error("Error en comprobarUsuario:", error);
    return res
      .status(500)
      .json({ error: "Error al comprobar usuario", details: error.message });
  }
}

module.exports = {
  getUsuarios,
  getUsuarioByEmail,
  crearUsuario,
  actualizarUsuario,
  eliminarUsuario,
  comprobarUsuario,
}