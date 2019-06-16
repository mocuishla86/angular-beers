import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';

@NgModule({
  declarations: [  //Componentes del módulo
    AppComponent,
    BeerListComponent
  ],
  imports: [ //Dependencias, otros módulos que me importo
    BrowserModule,
    AppRoutingModule
  ],
  providers: [], //Los servicios
  bootstrap: [AppComponent] //Sólo para el módulo principal. Es el componente raíz.
})
export class AppModule { }
