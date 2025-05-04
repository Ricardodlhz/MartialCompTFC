const Usuario=require("./../database/models/Usuarios")
const bcrypt=require("bcrypt")

//Recoger todos los usuarios
const getUsuarios=async()=>{
    try{
        return await Usuario.findAll()
    }catch(error){
        throw new Error("Error al seleccionar todos los usuarios: "+error.message)
    }
}

//Recoger el usuario por ID
const getUsuarioByEmail=async(email)=>{
    try {
        return await Usuario.findOne({ where: { email:email } });
      } catch (error) {
        throw new Error("Error al pedir un usuario por email: " + error.message);
      }
}

//Crear usuario con los datos necesarios
const crearUsuario=async(usuarioData)=>{
    try {
        return await Usuario.create(usuarioData);
      } catch (error) {
        throw new Error("Error al crear el usuario: " + error.message);
      }
}

//Para poder realizar una actualizar del usuario indicado mediante id
const actualizarUsuario = async (id, usuarioData) => {
    try {
      const usuario = await Usuario.findByPk(id);
      if (!usuario) {
        throw new Error("Usuario no encontrado");
      }
      return await usuario.update(usuarioData);
    } catch (error) {
      throw new Error("Error al modificar el usuario: " + error.message);
    }
  };

//Para poder borrar el usuario indicado
const borrarUsuario=async(id)=>{
    try {
        const usuario = await Usuario.findByPk(id);
        if (!usuario) {
          throw new Error("El usuario no existe");
        }
        return await usuario.destroy();
      } catch (error) {
        throw new Error("Error al borrar el usuario: " + error.message);
      }
}

//Funcion para poder comprobar el login mediante email y contraseña
const comprobarUsuario=async(email,password)=>{
    try {
        console.log("🔍 Buscando usuario con email:", email);
    
        const usuario = await Usuario.findOne({ where: { email:email } });
    console.log(usuario)
        if (!usuario) {
          console.log("❌ Usuario no encontrado");
          return { status: 404, error: "Error en usuario y/o contraseña" };
        }
    
        console.log("✅ Usuario encontrado:", usuario.email);
        console.log("🔑 Comparando contraseñas...");
    
    
        console.log(password)
        console.log(usuario.password)
        
    
        const iguales = await bcrypt.compare(password, usuario.password);
      
        console.log("⚖️ Resultado comparación:", iguales);
    
        if (!iguales) {
          console.log("❌ Contraseña incorrecta");
          return { status: 401, error: "Error en usuario y/o contraseña" };
        }
    
        console.log("🔐 Contraseña correcta, generando token...");
        // const token = createToken(usuario); 
    
        return { status: 200 };
      } catch (error) {
        console.error("💥 Error en comprobarUsuario:", error);
        return { status: 500, error: "Error al comprobar", details: error.message };
      }
}
module.exports={
    getUsuarios,
    getUsuarioByEmail,
    crearUsuario,
    actualizarUsuario,
    borrarUsuario,
    comprobarUsuario
}