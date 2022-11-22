const express=require('express');
const router=express.Router();

const {mostrarServicios} = require('../controllers/frontController');

// Leer todos los index

router.get('/',(req,res)=>{
    res.render('front/index')
})

router.get('/servicios',mostrarServicios)


module.exports=router;