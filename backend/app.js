
document.addEventListener('DOMContentLoaded', function () {
  var nombre = document.getElementById('name');
  var apellido = document.getElementById('lname');
  var telefono = document.getElementById('phone');
  var correo = document.getElementById('mail');
  var mensaje = document.getElementById('mss');
  var form = document.getElementById('formulario');
  
  form.addEventListener('submit', function (evt) {
    evt.preventDefault();

    let info = {
      nombre: nombre.value,
      apellido: apellido.value,
      telefono: telefono.value,
      correo: correo.value,
      mensaje: mensaje.value
    }

    let resultado = validarObjeto(info);
    if(resultado.esValido){
      fetch('http://127.0.0.1:3000/envio',{
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result)=>{
        console.log(result);
      }).catch((errr)=>{
        console.log(error)
      })
      
    }
    else{
      resultado.errores.forEach((err)=>{
        let field = document.getElementById(err);
        field.classList.add('error')
      })
      alert('Revise los campos')
    }
  })

});

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
