const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../../config/db')

class ImagenesEventos extends Model{}

ImagenesEventos.init(
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
        modelName: 'ImagenesEventos',
        tableName: 'imageneseventos',
        timestamps: false,
        underscored: false,
})

module.exports = ImagenesEventos;