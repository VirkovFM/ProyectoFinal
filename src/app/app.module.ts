import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { Art1Component } from './art1/art1.component';
import { Art2Component } from './art2/art2.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    GaleriaComponent,
    Art1Component,
    Art2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
