const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../../config/db')


class Imagenes extends Model { }


Imagenes.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        imagen: {
            type: DataTypes.BLOB("long"), //uso long para no tner problema por el espacio
            allowNull: false,
        },
    }, 
    {
        sequelize,
        modelName: 'Imagenes',
        tableName: 'imagenes',
        timestamps: false,
        underscored: false,
})

module.exports = Imagenes;