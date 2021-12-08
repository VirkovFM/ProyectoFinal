import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.css']
})
export class TablaComponent implements OnInit {

  datosJSON: any = [{
    "fundador": "Jennifer Wagner",
    "empresa": "CarbonCure",
    "fundacion": "siglo XX",
    "pais": "Canada",
    "descripcion": " Proporciona un método para utilizar el CO2 capturado en la fabricación de hormigón para mejorar sus propiedades estructurales y reducir su impacto ambiental."
  }, {
    "fundador": "José Ignacio Sánchez Galán",
    "empresa": "Iberdrola",
    "fundacion": "1992",
    "pais": "España",
    "descripcion": "Es líder en renovables y redes inteligentes, tiene una cartera diversificada de negocios y geografías, está presente en países con alto rating y ha demostrado su fortaleza financiera y su experiencia y capacidad de ejecución."
  }, {
    "fundador": "Ric Fulop, Rick Chin, Jonah Myerberg, Ely Sachs, ",
    "empresa": "Desktop Metal",
    "fundacion": "2015",
    "pais": "Estados Unidos",
    "descripcion": "Fabrica uno de los sistemas de impresión 3D más rápidos del mercado para la producción en masa de piezas metálicas de alta resolución."
  }, {
    "fundador": "Vincent Sciandra",
    "empresa": "Metron",
    "fundacion": "2013",
    "pais": "Francia",
    "descripcion": " Proporciona una plataforma IIoT (Internet industrial de las cosas) impulsada por IA que optimiza el uso de energía para instalaciones industriales."
  }, {
    "fundador": "Jérôme Rigaud",
    "empresa": "Navya",
    "fundacion": "2015",
    "pais": "Francia",
    "descripcion": "Es el desarrollador líder de lanzaderas autónomas de baja velocidad."
  }, {
    "fundador": "Ichiro Tamura",
    "empresa": "Mitsui Power Americas",
    "fundacion": "2006",
    "pais": "Japon",
    "descripcion": "Es una compañía de desarrollo y gestión de activos de electricidad, con amplia experiencia y conocimiento en proyectos de ciclo combinado, cogeneración, solar y eólica de gran escala."
  }, {
    "fundador": "Carlos Gonzales-Mexico",
    "empresa": "Saavi Energía",
    "fundacion": "1995",
    "pais": "Inglaterra",
    "descripcion": "Saavi Energia es un productor privado de electricidad en el segmento energético que cuenta con Centrales de Ciclo Combinado y Estaciones de Compresión de Gas, que proporciona soluciones personalizadas a clientes en los sectores comercial e industrial."
  }, {
    "fundador": "Jurgen Krehnke",
    "empresa": "Sunfolding",
    "fundacion": "2012",
    "pais": "Estados Unidos",
    "descripcion": "Ha inventado nuevos seguidores solares sin motor que resultan en una instalación más rápida de paneles solares a costos más bajos. "
  }, {
    "fundador": "Lex Hartman",
    "empresa": "Ubitricity ",
    "fundacion": "2019",
    "pais": "Inglaterra",
    "descripcion": "Ha desarrollado un cable eléctrico inteligente único para la carga de EV que deriva en un punto de carga mucho más pequeño y más asequible."
  }, {
    "fundador": "Cody Friesen",
    "empresa": "Zero Mass Water",
    "fundacion": "2014",
    "pais": "Estados Unidos",
    "descripcion": "Vende un HydropanelTM que utiliza la luz solar para generar agua del aire."
  }]
  
  constructor() { }

  ngOnInit(): void {
  }

}
