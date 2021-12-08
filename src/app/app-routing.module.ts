import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';

import { Art1Component } from './art1/art1.component'
import { Art2Component } from './art2/art2.component'
import { Art3Component } from './art3/art3.component'
import { Art4Component } from './art4/art4.component'
import { Art5Component } from './art5/art5.component'

import { GaleriaComponent } from './galeria/galeria.component';
import { FormAyudaComponent } from './form-ayuda/form-ayuda.component';
import { TablaComponent } from './tabla/tabla.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  /*{path:'',redirectTo:'inicio', pathMatch:'full'},*/
  {path:'inicio',component:InicioComponent},
  {path:'art1',component:Art1Component},
  {path:'art2',component:Art2Component},
  {path:'art3',component:Art3Component},
  {path:'art4',component:Art4Component},
  {path:'art5',component:Art5Component},

  {path:'galeria',component:GaleriaComponent},
  {path:'formAyuda',component:ContactoComponent},
  {path:'tabla',component:TablaComponent},
  // {path:'contacto',component:ContactoComponent}
  
  // {path: '**', redirectTo:'inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
