import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  articulos: any = [{
    "titulo":"Impulsando el cambio en Vanuatu",
    "autor":"Programa de desarrollo de la ONU",
    "conten":"El aire es abrasador, pero el viento alivia. La arena bajo nuestros pies está caliente mientras esperamos que Amos, el barquero, prepare su bote y nos lleve a bordo. Más adelante hay un corto viaje en bote desde Efate hasta la isla Lelepa. Nuestros primeros momentos en la nación de Vanuatu en el Pacífico Sur son impresionantes. Un mar turquesa resplandeciente contrastado con el esmeralda de las islas frente a la costa de Efate, con un cielo impecable como telón de fondo.",
    "img":"./assets/art10.jpeg",
    "biblio":"Texto de Ildiko Hamos. Fotos de Ildiko Hamos, Alessandro Medici y Timea Luette",
    "link":"/art1"
  },
  {
    "titulo":"Cinco estrategias para la neutralidad de carbono",
    "autor":"ONU Desarrollo",
    "conten":"Desde la revolución industrial, la tecnología ha impulsado nuestras sociedades de formas hasta entonces nunca vistas. Logramos afrontar algunos de los mayores retos de nuestra era: la producción de comida, la erradicación de enfermedades y la expansión de los sistemas de transporte y comunicación. Pero este modo de desarrollo ha tenido un coste y se ha convertido quizás en la mayor amenaza de nuestra época.",
    "img":"./assets/art20.jpeg",
    "biblio":"Investigación y texto: Daniela Peris, pasante del PNUD en Nueva York. Edición de fotos de Rico Cruz, pasante de Fotografía en el PNUD en Nueva York.",
    "link":"/art2"
  },
  {
    "titulo":"Luces en el Líbano",
    "autor":"Programa de las Naciones Unidas para el Desarrollo",
    "conten":"1 de cada 7 personas vive sin electricidad. Conoce a tres mujeres que iluminan sus vidas en el Líbano, Alissar, Asma y Sahar",
    "img":"./assets/art30.jpeg",
    "biblio":"Fotografía - Dalia Khamissy",
    "link":"/art3"
  },
  {
    "titulo":"Herramientas para el desarrollo",
    "autor":"Programa de las Naciones Unidas para el Desarrollo",
    "conten":"Una clínica médica rudimentaria que sirve a un barrio pobre superpoblado. Un asentamiento en expansión para familias desplazadas. Un polvoriento centro urbano marcado por años de conflicto. Estos probablemente no son los lugares donde esperarías encontrar la tecnología más avanzada o las ideas más inspiradoras. Pero es precisamente allí, y en otros lugares como estos, donde tal innovación puede tener el mayor impacto.",
    "img":"./assets/art40.jpeg",
    "biblio":"© Laura Gil Martinez / IAEA",
    "link":"/art4"
  },
  {
    "titulo":"Energía solar para la salud",
    "autor":"United Nations Development Programme",
    "conten":"Ninguna mujer debería dar a luz en la oscuridad. Ninguna operación debería realizarse a la luz de las velas. Y ningún niño debería ser vulnerable a una enfermedad porque las vacunas no pueden refrigerarse. Durante mucho tiempo, la falta de energía fiable ha impedido a personas de comunidades remotas y rurales el acceso a la asistencia sanitaria que requerían en el momento oportuno. Mientras la carrera por un acceso a la energía universal acelera el ritmo, aquí se proponen cinco formas en las que la energía renovable puede ayudar a proteger la asistencia sanitaria de calidad para las personas más pobres del mundo.",
    "img":"./assets/art50.jpeg",
    "biblio":"Fotos: PNUD / Karin Schermbrucker para Slingshot",
    "link":"/art5"
  },
]

  constructor() { }

  ngOnInit(): void {
  }

}
