const express = require('express');
const router = express.Router()

// leer todos los index

router.get('/',(req,res)=>{
    res.render('back/index')
})

// eliminar servicio

module.exports=router;