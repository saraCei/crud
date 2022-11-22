const express=require('express');
require('dotenv').config();
const {DBConnection} = require('./database/config')

// Configurar express
const app=express();
const port=process.env.PORT;

// Conectar a bbdd
DBConnection();

// parse application
app.use(express.urlencoded({extended: false}))

// parse application/json
app.use(express.json())

// Configurar static
app.use(express.static(__dirname+'/public'));

// Configurar template engines
app.set('views',__dirname+'/views');
app.set('view engine','ejs')

//  // Rutas
app.use('/',require('./routers/frontRouter'));
//app.use('/servicios',require('./routers/serviciosRouter')); 
app.use('/admin/servicios',require('./routers/serviciosRouter')); 
// app.get('/',(req,res)=>{
//      res.render('back/index');
//  })

// app.get('/servicios',(req,res)=>{
//     res.render('back/servicios');
// })

// app.get('/productos',(req,res)=>{
//     res.render('back/productos');
// })

app.use((req,res)=>{
    res.status(404).render('front/404',{
        error:'404',
        msg: 'Página no encontrada'
    })
})

// Poner express a la escucha
app.listen(port, ()=>{
    console.log(`Express a la escucha del puerto ${port}`)
})