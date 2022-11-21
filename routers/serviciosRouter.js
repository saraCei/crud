const express = require('express');
const router = express.Router();
const {leerServicios,vistaCrearServicio,nuevoServicio,vistaEditarServicio,editarServicio,eliminarServicio,leerUnServicio} =require('../controllers/serviciosController')

// leer todos los servicios
router.get('/',leerServicios)

// vista formulario crear nuevo
router.get('/nuevo',vistaCrearServicio)

// crear nuevo
router.post('/nuevo',nuevoServicio)

// vista formulario editar
router.get('/editar',)

// editar servicio
router.put('/editar/:id',)

// eliminar servicio
router.delete('/:id',)

//leer un servicio
router.get('/:id',)




module.exports=router;