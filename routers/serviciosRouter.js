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
router.get('/editar/:id',vistaEditarServicio)

// editar servicio
router.put('/editar',editarServicio)

// eliminar servicio
// router.delete('/:id',eliminarServicio)
router.get('eliminar/:id',eliminarServicio)

//leer un servicio
router.get('/:id',leerUnServicio)


module.exports=router;