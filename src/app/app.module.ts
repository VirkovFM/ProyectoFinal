import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { Art1Component } from './art1/art1.component';
import { Art2Component } from './art2/art2.component';
import { Art3Component } from './art3/art3.component';
import { Art4Component } from './art4/art4.component';
import { Art5Component } from './art5/art5.component';
import { FormAyudaComponent } from './form-ayuda/form-ayuda.component';
import { TablaComponent } from './tabla/tabla.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ContactoComponent } from './contacto/contacto.component';
/*import { NgbModule } from '@ng-bootstrap/ng-bootstrap';*/

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent,
    Art1Component,
    Art2Component,
    Art3Component,
    Art4Component,
    Art5Component,
    FormAyudaComponent,
    TablaComponent,
    NavbarComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
