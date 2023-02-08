const express = require('express')
const mongoose = require('mongoose')
const bodyparser = require('body-parser')
require('dotenv').config()

const app = express()

//capturar el body
app.use(bodyparser.urlencoded({
    extended: false
}))
app.use(bodyparser.json())

// conexion a la base de datos
const url = `mongodb+srv://${process.env.USUARIO}:${process.env.PASSWORD}@cluster0.5d1tloq.mongodb.net/${process.env.DBNAME}`
mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then (() => console.log('conectado a la base de datos!!!'))
.catch((error) => console.log('error: ' + error))

// creacion e importacion de rutas
const authRoutes = require('./routes/auth')

// ruta de middleware
app.use('/api/user', authRoutes)

// ruta raiz
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'si funciona... vamos a comer!!!'
    })
})

// arrancar el servidor 
const PORT = process.env.PORT || 9000
app.listen(PORT, () => {
    console.log (`escuchad en el puerto: ${PORT}`)
})