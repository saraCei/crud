const Servicio=require('../models/ServicioModel')

// leer todos los servicios
const leerServicios=(req,res)=>{
    Servicio.find((error,servicios)=>{
        if(error){
            console.log('Error al leer los servicios')
            return res.json({
                ok:false,
                msg: 'Error al leer los servicios'
            })
        }else{
            console.log(servicios)
                res.render('back/servicios',{
                    servicios
                })
        }
    })
}

//vista formulario crear nuevo
const vistaCrearServicio=(req,res)=>{
    res.render('back/nuevoServicio')
}

//crear nuevo
const nuevoServicio=(req,res)=>{

    //console.log(req.body)
    const {nombre,comentario}=req.body

    const servicio=new Servicio({
        nombre, //nombre:req.body.nombre,
        comentario //comentario:req.body.comentario
    })

    servicio.save((error,servicio)=>{
        if(error){
            return res.json({
                ok:false,
                msg:'Error al crear el servicio'
            })
        }
        res.redirect('/servicios')
    })

    // res.json({
    //     ok:true,
    //     msg: 'servicio creado'
    // })
}


//vista formulario editar
const vistaEditarServicio=(req,res)=>{
    res.render('back/editarServicio')
}


// editar servicio
const editarServicio=(req,res)=>{
    res.json({
        ok:true,
        msg: 'servicio editado'
    })
}


// eliminar servicio
const eliminarServicio = (req,res)=>{
    res.json({
        ok:true,
        msg:'servicio eliminado'
    })
}

// leer un servicio
const leerUnServicio = (req,res)=>{
    res.render('back/servicio')
}


module.exports={
    leerServicios,
    leerUnServicio,
    eliminarServicio,
    vistaCrearServicio,
    nuevoServicio,
    vistaEditarServicio,
    editarServicio,
}