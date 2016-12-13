"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var app_component_1 = require("./app.component");
var lista_contactos_component_1 = require("./lista-contactos/lista-contactos.component");
var binding_component_1 = require("./ejemplos/binding.component");
var contactos_service_1 = require("./contactos.service");
var formulario_contacto_component_1 = require("./formulario-contacto/formulario-contacto.component");
var detalles_contacto_component_1 = require("./detalles-contacto/detalles-contacto.component");
var app_routing_module_1 = require("./app-routing.module");
var mis_contactos_component_1 = require("./mis-contactos/mis-contactos.component");
var nuevo_contacto_component_1 = require("./nuevo-contacto/nuevo-contacto.component");
var barra_navegacion_component_1 = require("./barra-navegacion/barra-navegacion.component");
var contactos_resolve_service_1 = require("./contactos-resolve.service");
var orden_pipe_1 = require("./orden.pipe");
var pipes_component_1 = require("./ejemplos/pipes.component");
var directiva_atributo_directive_1 = require("./ejemplos/directiva-atributo.directive");
var directiva_component_1 = require("./ejemplos/directiva.component");
var directiva_estructural_directive_1 = require("./ejemplos/directiva-estructural.directive");
var inyeccion_service_1 = require("./ejemplos/inyeccion.service");
var inyeccion_component_1 = require("./ejemplos/inyeccion.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        // Usamos 'imports' para importar otros módulos
        // de los cuáles dependedemos.
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            http_1.HttpModule,
            app_routing_module_1.AppRoutingModule
        ],
        // En 'declarations' añadimos todos los componentes,
        // pipes y directivas de nuestra aplicación.
        declarations: [
            app_component_1.AppComponent,
            lista_contactos_component_1.ListaContactosComponent,
            binding_component_1.BindingComponent,
            formulario_contacto_component_1.FormularioContactoComponent,
            detalles_contacto_component_1.DetallesContactoComponent,
            mis_contactos_component_1.MisContactosComponent,
            nuevo_contacto_component_1.NuevoContactoComponent,
            barra_navegacion_component_1.BarraNavegacionComponent,
            orden_pipe_1.OrdenPipe,
            pipes_component_1.EjemplosPipesComponent,
            directiva_atributo_directive_1.DirectivaAtributoDirective,
            directiva_component_1.DirectivaComponent,
            directiva_estructural_directive_1.DirectivaEstructuralDirective,
            inyeccion_component_1.InyeccionComponent
        ],
        // En 'providers' añadimos todos los servicios de
        // nuestra aplicación.
        providers: [
            contactos_service_1.ContactosService,
            contactos_resolve_service_1.ContactosResolve,
            common_1.SlicePipe,
            inyeccion_service_1.EjemploInyeccion1ServiceProveedor,
            inyeccion_service_1.EjemploInyeccion2ServiceProveedor,
            inyeccion_service_1.EjemploInyeccion3Proveedor
        ],
        // En 'bootstrap' indicamos el componente raíz de
        // nuestra aplicación.
        bootstrap: [
            app_component_1.AppComponent
        ]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map