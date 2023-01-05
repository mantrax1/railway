const express=require('express')
const ejs = require('ejs')
const path = require('path');

const app = express();


app.listen(3000)
app.set('views',path.join(__dirname,'views'))
app.set('view engine','ejs')//motor de plantillas //añade logica de progranacionb en html(html plantillas)
app.use(require('./rutas/index'))
app.use(express.static(path.join(__dirname,'public')))//manejo de directorios estaticos
// app.use(express.static(path.join(__dirname,'public/img')))
console.log('server esta escuchando en el puerto ',3000)
