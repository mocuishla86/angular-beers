import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './beer-list/beer-list.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [  //Componentes del módulo
    AppComponent,
    BeerListComponent
  ],
  imports: [ //Dependencias, otros módulos que me importo
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [], //Los servicios
  bootstrap: [AppComponent] //Sólo para el módulo principal. Es el componente raíz.
})
export class AppModule { }
