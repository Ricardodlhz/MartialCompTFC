const { DataTypes, Model } = require('sequelize');
const sequelize = require('./../../config/db')
//encriptar la contrasñea
const bcrypt = require('bcrypt')

class Usuarios extends Model { }

Usuarios.init(
    {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUID,
            allowNull: false,
            primaryKey: true,
        },
        nombre: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 50],
                    msg: 'El nombre debe tener entre 1 y 50 caracteres',
                },

            },
        },
        apellido: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 50],
                    msg: 'El apellido debe tener entre 1 y 50 caracteres',
                },
            },
        },


        fecha_nac: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: {
                    msg: 'La fecha de nacimiento debe ser válida',
                },
                isBefore: {
                    args: new Date().toISOString().split("T")[0], // No permite fechas futuras
                    msg: 'La fecha de nacimiento no puede ser en el futuro',
                },
                isAfter: {
                    args: "1900-01-01",
                    msg: 'La fecha de nacimiento debe ser después del 1 de enero de 1900',
                },
            },
        },

        localidad: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        provincia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cp: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [4, 10], // Un código postal suele tener entre 4 y 10 caracteres
                    msg: 'El código postal debe tener entre 4 y 10 caracteres',
                },
                isNumeric: {
                    msg: 'El código postal solo puede contener números',
                },
            },
        },
        num_tlf: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: {
                    msg: 'El número de teléfono solo puede contener números',
                },
                len: {
                    args: [7, 15], // Un teléfono suele tener entre 7 y 15 dígitos
                    msg: 'El número de teléfono debe tener entre 7 y 15 dígitos',
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: 'El email no es válido',
                },
            },
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: {
                    args: [/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,100}$/],
                    msg: "La contraseña debe tener al menos 8 caracteres, incluyendo una mayúscula, un número y un carácter especial (Ejemplo: Abcdef1!)."
                },
                len: {
                    args: [8, 100],
                    msg: "La contraseña debe tener entre 8 y 100 caracteres."
                },
            },
        },
    },
    {
        sequelize,
        modelName: 'Usuarios',
        tableName: 'usuarios',
        timestamps: false,
        underscored: false,

         // Hook antes de crear un usuario
              beforeCreate: async (usuario) => {
                if (usuario.password) {
                  const salt = await bcrypt.genSalt(10);
                  usuario.password = await bcrypt.hash(usuario.password, salt);
                }
              },
              // Hook antes de actualizar un usuario
              beforeUpdate: async (usuario) => {
                if (usuario.changed("password")) { // Solo hashea si la contraseña cambió
                  const salt = await bcrypt.genSalt(10);
                  usuario.password = await bcrypt.hash(usuario.password, salt);
                }
              },
         
    }
)


module.exports=Usuarios

