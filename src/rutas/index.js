const {Router}= require('express')

const ruta = Router();

ruta.get('/',(req,res)=>{res.render('index',{titulo: 'home'})})

ruta.get('/about',(req,res)=>{res.render('about',{about:'mi about'})})

ruta.get('/contacto',(req,res)=>{res.render('contacto',{contacto: 'mi contacto'})}) //pasamos condigo de backen a frontend

module.exports = ruta // exportamos rutas hacia la pagina principal