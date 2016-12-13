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
var router_1 = require("@angular/router");
var core_1 = require("@angular/core");
var mis_contactos_component_1 = require("./mis-contactos/mis-contactos.component");
var nuevo_contacto_component_1 = require("./nuevo-contacto/nuevo-contacto.component");
var contactos_resolve_service_1 = require("./contactos-resolve.service");
// Definimos las rutas de nuestra aplicación. Las rutas
// son pares 'ruta' + 'componente'.
var rutas = [
    {
        path: "mis-contactos",
        component: mis_contactos_component_1.MisContactosComponent,
        resolve: {
            contactos: contactos_resolve_service_1.ContactosResolve
        }
    },
    {
        path: "nuevo-contacto",
        component: nuevo_contacto_component_1.NuevoContactoComponent
    },
    {
        path: "**",
        redirectTo: "/mis-contactos"
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        // Importamos un nuevo módulo generado a partir de las rutas.
        imports: [router_1.RouterModule.forRoot(rutas)],
        // Exportamos el 'RouterModule' para evitar cargarlo de nuevo en 'AppModule'.
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map