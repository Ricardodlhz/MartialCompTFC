//Recojo express
const express=require("express")
//Recojo el bodyParse
const bodyParser=require("body-parser")
//App usando express
const app=express()
//Recojo cors para no tener problemas de cors en el navegador
const cors=require("cors")
//Importamos la conexion a la base de datos
require('dotenv').config()

const {sequelize}=require("./database/models")
//Seteamos el puerto
const PORT=process.env.PORT || 5001

app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

//Ruta principal
const router=require("./routes/index")
app.use("/api",router)

//Arrancamos el servidor 
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));

//sequealize
sequelize.sync({ force: false }).then(() => { // 👈 Cambia `false` a `true` SOLO PARA PRUEBAS
    console.log('📌 Base de datos sincronizada con MySQL');
  });