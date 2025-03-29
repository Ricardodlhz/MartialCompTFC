const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../../config/db')


class Gimnasios extends Model{}


Gimnasios.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },

        nombre_gimnasio:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        provincia:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        pais:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        sequelize,
        modelName: 'Gimnasios',
        tableName: 'gimnasios',
        timestamps: false,
        underscored: false,
    }
)

module.exports=Gimnasios