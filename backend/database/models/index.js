const { Sequelize } = require('sequelize');
const sequelize = require('./../../config/db');

//Importamos los modelos
const Deportes=require('./Deportes')
const Eventos=require('./Eventos')
const Federados=require('./Federados')
const Gimnasios=require('./Gimnasios')
const Imagenes=require('./Imagenes')
const Licencias=require('./Licencias')
const Usuarios_Eventos=require('./Usuarios_Eventos')
const Usuarios=require('./Usuarios')


//Relaciones de usuario
Gimnasios.hasOne(Usuarios,{foreignKey:'id_academia'})
Usuarios.hasMany(Imagenes,{foreignKey:'id_usuario'})


//Relaciones de Deportes
Deportes.hasOne(Eventos,{foreignKey:'deporte_id'})

//Usuarios_registrado_evento
Usuarios.belongsToMany(Eventos,{through:'Usuarios_registrado_evento',foreignKey:'id_usuario'})
Eventos.belongsToMany(Usuarios,{through:'Usuarios_registrado_evento',foreignKey:'id_evento'})

//Federados
Usuarios.belongsToMany(Licencias,{through:'Federados',foreignKey:'id_usuario'})
Licencias.belongsToMany(Usuarios,{through:'Federados',foreignKey:'id_licencia'})

//Relaciones federaciones
Deportes.hasOne(Licencias,{foreignKey:'id_deporte'})
module.exports = {
    sequelize,
    Deportes,
    Eventos,
    Federados,
    Gimnasios,
    Imagenes,
    Licencias,
    Usuarios_Eventos,
    Usuarios,
  };