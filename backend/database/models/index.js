const { Sequelize } = require('sequelize');
const sequelize = require('./../../config/db');

//Importamos los modelos
const Deportes=require('./Deportes')
const Eventos=require('./Eventos')

const Gimnasios=require('./Gimnasios')
const Imagenes=require('./Imagenes')
const ImagenesEventos=require('./ImagenesEventos')
const Licencias=require('./Licencias')

const Usuarios=require('./Usuarios')


//Relaciones de usuario
Gimnasios.hasOne(Usuarios,{foreignKey:'id_academia'})
Usuarios.hasMany(Imagenes,{foreignKey:'id_usuario'})


// Evento.js
Eventos.belongsTo(Deportes, { foreignKey: 'id_deporte' });

// Deporte.js
Deportes.hasMany(Eventos, { foreignKey: 'id_deporte' });
Eventos.hasOne(ImagenesEventos,{foreignKey:'id_evento'})
//Usuarios_registrado_evento
Usuarios.belongsToMany(Eventos,{through:'Usuarios_registrado_evento',foreignKey:'id_usuario'})
Eventos.belongsToMany(Usuarios,{through:'Usuarios_registrado_evento',foreignKey:'id_evento'})

//Federados
Usuarios.belongsToMany(Deportes,{through:'Federados',foreignKey:'id_usuario'})
Deportes.belongsToMany(Usuarios,{through:'Federados',foreignKey:'id_deporte'})

//Relaciones federaciones
Deportes.hasOne(Licencias,{foreignKey:'id_deporte'})
module.exports = {
    sequelize,
    Deportes,
    Eventos,
    ImagenesEventos,
    Gimnasios,
    Imagenes,
    Licencias,
   
    Usuarios,
  };