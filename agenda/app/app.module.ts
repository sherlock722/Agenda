import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { SlicePipe } from "@angular/common";

import { AppComponent }  from './app.component';
import { ListaContactosComponent } from "./lista-contactos/lista-contactos.component";
import { BindingComponent } from "./ejemplos/binding.component";
import { ContactosService } from "./contactos.service";
import { FormularioContactoComponent } from "./formulario-contacto/formulario-contacto.component";
import { DetallesContactoComponent } from "./detalles-contacto/detalles-contacto.component";
import { AppRoutingModule } from "./app-routing.module";
import { MisContactosComponent } from "./mis-contactos/mis-contactos.component";
import { NuevoContactoComponent } from "./nuevo-contacto/nuevo-contacto.component";
import { BarraNavegacionComponent } from "./barra-navegacion/barra-navegacion.component";
import { ContactosResolve } from "./contactos-resolve.service";
import { OrdenPipe } from "./orden.pipe";
import { EjemplosPipesComponent } from "./ejemplos/pipes.component";
import { DirectivaAtributoDirective } from "./ejemplos/directiva-atributo.directive";
import { DirectivaComponent } from "./ejemplos/directiva.component";
import { DirectivaEstructuralDirective } from "./ejemplos/directiva-estructural.directive";
import {
  EjemploInyeccion1ServiceProveedor,
  EjemploInyeccion2ServiceProveedor,
  EjemploInyeccion3Proveedor } from "./ejemplos/inyeccion.service";
import { InyeccionComponent } from "./ejemplos/inyeccion.component";

@NgModule({
  // Usamos 'imports' para importar otros módulos
  // de los cuáles dependedemos.
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  // En 'declarations' añadimos todos los componentes,
  // pipes y directivas de nuestra aplicación.
  declarations: [
    AppComponent,
    ListaContactosComponent,
    BindingComponent,
    FormularioContactoComponent,
    DetallesContactoComponent,
    MisContactosComponent,
    NuevoContactoComponent,
    BarraNavegacionComponent,
    OrdenPipe,
    EjemplosPipesComponent,
    DirectivaAtributoDirective,
    DirectivaComponent,
    DirectivaEstructuralDirective,
    InyeccionComponent
  ],
  // En 'providers' añadimos todos los servicios de
  // nuestra aplicación.
  providers: [
    ContactosService,
    ContactosResolve,
    SlicePipe,
    EjemploInyeccion1ServiceProveedor,
    EjemploInyeccion2ServiceProveedor,
    EjemploInyeccion3Proveedor
  ],
  // En 'bootstrap' indicamos el componente raíz de
  // nuestra aplicación.
  bootstrap: [
    AppComponent
    //BindingComponent
    //EjemplosPipesComponent
    //DirectivaComponent
    //InyeccionComponent
  ]
})
export class AppModule { }