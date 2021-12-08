const {request, response} = require("express");
const nodemailer = require("nodemailer");

const envio = (req=request,resp=response) =>{
    let body = req.body;
    console.log(body)
    let {apellido, nombre, email} = body;
    
    let validacion = validarObjeto(body);
    if(!validacion.esValido){
        return resp.json({error: 'Peticion no valida'});
    }

    let config = nodemailer.createTransport({
        host:'smtp.gmail.com',
        post:587,
        auth:{
            user:'energiaasequible753@gmail.com',
            pass:'Proyectoweb'
        }
    });
    const opciones = {
        from :`${body.nombre} ${body.apellido}`,
        subject: `Reporte de error de ${body.correo}` ,
        to: 'soporte.energia.asequible@gmail.com',
        text: `${body.mensaje} 
        Telefono de contacto: ${body.telefono}`,
      

    };
    config.sendMail(opciones,function(error,result){

        if (error) return resp.json({ok:false,msg:error});

        return resp.json({

            ok:true,
            msg:result
        })
        
    })
 
}
function validarObjeto(objInformacion) {
    let errores= [];
  
    if(!objInformacion.nombre) {
      errores.push('name')
    }
    if(!objInformacion.apellido) {
      errores.push('lname')
    }
    if(!objInformacion.mensaje) {
      errores.push('mss')
    }
    if(!esCorreo(objInformacion.correo)){
      errores.push('mail')
    }
    if(!esTelefono(objInformacion.telefono)){
      errores.push('phone')
    }
  
    return {
      errores: errores,
      esValido: errores.length < 1
    }
  }
  
  function esTelefono(cadena) {
    let regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g;
    let valid = regex.test(cadena)
    return valid;
  }
  
  function esCorreo(cadena) {
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    let valid = regex.test(cadena)
    return valid;
  }
  
module.exports ={
    envio
}