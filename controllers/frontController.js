const Servicio=require('../models/ServicioModel');

const mostrarServicios=(req,res)=>{

    Servicio.find((error,servicios)=>{
        if(error){
            return res.json({
                ok:false,
                msg:'Error al leer los servicios'
            })
        }else{
            res.render('front/servicios',{
                servicios
            })
        }
    })

}

module.exports={
    mostrarServicios
}