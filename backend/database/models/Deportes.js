const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../../config/db')


class Deportes extends Model{}

Deportes.init(
    {
        id: {
            type: DataTypes.UUIDV4,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },

        nombre_deporte: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: {
                    args: [[
                        "MMA",
                        "Boxeo",
                        "Kickboxing",
                        "Muay Thai",
                        "Judo",
                        "Karate",
                        "Taekwondo",
                        "BJJ",
                        "Lucha libre",
                        "Lucha grecorromana",
                        "Sambo",
                        "Sanda",
                    ]],
                    msg: "El deporte ingresado no es válido. Solo se permiten deportes de contacto reconocidos.",
                },
            },
        },
    },{
        sequelize,
        modelName: 'Deportes',
        tableName: 'deportes',
        timestamps: false,
        underscored: false,
    }
)

module.exports=Deportes