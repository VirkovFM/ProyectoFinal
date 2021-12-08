import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  nombre:any;
  apellido:any;
  telefono:any;
  correo:any;
  mensaje:any;
  constructor() { }

  ngOnInit(): void {
    this.nombre = document.getElementById('name');
    this.apellido = document.getElementById('lname');
    this.telefono = document.getElementById('phone');
    this.correo = document.getElementById('mail');
    this.mensaje = document.getElementById('mss');
  }

  handleSubmit() {
    // $evt.preventDefault();
    let info = {
      nombre: this.nombre.value,
      apellido: this.apellido.value,
      telefono: this.telefono.value,
      correo: this.correo.value,
      mensaje: this.mensaje.value
    }

    let resultado = this.validarObjeto(info);
    if(resultado.esValido){
      fetch('https://c3cf-187-190-130-118.ngrok.io/envio',{
        method: 'POST',
        body: JSON.stringify(info),
        headers: {
          'Content-Type': 'application/json'
        }
      }).then((result)=>{
        alert('Mensaje enviado');
        this.nombre.value = '';
        this.apellido.value = '';
        this.telefono.value = '';
        this.correo.value = '';
        this.mensaje.value = '';
      }).catch((errr)=>{
        console.log(errr)
      })
      
    }
    else{
      resultado.errores.forEach((err:any)=>{
        let field = document.getElementById(err);
        field && field.classList.add('error')
      })
      alert('Revise los campos')
    }
  }

  validarObjeto(objInformacion:any):any {
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
    if(!this.esCorreo(objInformacion.correo)){
      errores.push('mail')
    }
    if(!this.esTelefono(objInformacion.telefono)){
      errores.push('phone')
    }
  
    return {
      errores: errores,
      esValido: errores.length < 1
    }
  }
  
  esTelefono(cadena:string): boolean {
    let regex = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/g;
    let valid = regex.test(cadena)
    return valid;
  }
  
  esCorreo(cadena: string): boolean {
    let regex = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;
    let valid = regex.test(cadena)
    return valid;
  }
}
