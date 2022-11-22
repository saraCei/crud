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
            //console.log(servicios)
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
        res.redirect('/admin/servicios')
    })
}


//vista formulario editar
const vistaEditarServicio=(req,res)=>{

    const id=req.params.id; // const {id}=req.params

    Servicio.findOne({_id:id},(error,servicio)=>{
        if(error){
            return res.json({
                ok:false,
                msg: 'Error al editar servicio'
            })
        }else{
            res.render('back/editarServicio',{servicio})
        }
    })
}


// editar servicio
const editarServicio=(req,res)=>{

    console.log('hasta aqui bien')
    const {id,nombre,comentario} = req.body;

    Servicio.findByIdAndUpdate(id, {nombre, comentario},(error,servicio)=>{
        if(error){
            return res.json({
                ok:true,
                msg: 'servicio editado'
            })
        }else{
            res.redirect('/admin/servicios')
        }
    })
}


// eliminar servicio
const eliminarServicio = (req,res)=>{

    const {id}=req.params;

    Servicio.findByIdAndRemove(id,(error,servicio)=>{
        if(error){
            return res.json({
                ok:false,
                msg:'Error al eliminar servicio'
            })
        }
        res.redirect('/admin/servicios')
    })
}

// leer un servicio
const leerUnServicio = (req,res)=>{

    const {id}=req.params;
    Servicio.findOne({_id:id},(error,servicio)=>{
        if(error){
            return res.json({
                ok:false,
                msg:'Error al leer servicio'
            })
        }else{
            res.render('back/servicio',{servicio})
        }
    })
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