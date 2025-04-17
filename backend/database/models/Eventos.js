const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../../config/db')

class Eventos extends Model { }


Eventos.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        nombre_evento: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [3, 100], // Mínimo 3 caracteres, máximo 100
                    msg: "El nombre del evento debe tener entre 3 y 100 caracteres.",
                },
                is: {
                    args: /^[a-zA-Z0-9 áéíóúÁÉÍÓÚñÑ&-]+$/u, // Solo letras, números y ciertos símbolos permitidos
                    msg: "El nombre del evento solo puede contener letras, números, espacios y los caracteres & -.",
                },
            },
        },
        fecha_evento: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: {
                    msg: "La fecha del evento debe ser válida.",
                },
                isAfter: {
                    args: new Date().toISOString().split("T")[0], // No permite fechas en el pasado
                    msg: "La fecha del evento debe ser futura.",
                },
            },
        },

    }, {
        sequelize,
        modelName: 'Eventos',
        tableName: 'eventos',
        timestamps: false,
        underscored: false,
    }

)

module.exports = Eventos