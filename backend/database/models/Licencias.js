const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../../config/db')

class Licencias extends Model{}

Licencias.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        
    },{
        sequelize,
        modelName: 'Licencias',
        tableName: 'licencias',
        timestamps: false,
        underscored: false,  
    }
)


module.exports=Licencias