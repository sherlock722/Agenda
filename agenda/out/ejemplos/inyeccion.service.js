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
// Inyección de clase como dependencia.
// Este es el caso más sencillo. Utilizamos un ClassProvider.
var EjemploInyeccion1Service = (function () {
    function EjemploInyeccion1Service() {
    }
    EjemploInyeccion1Service.prototype.obtenerMensaje = function () {
        return "Soy un mensaje procedente de EjemploInyeccion1Service.";
    };
    return EjemploInyeccion1Service;
}());
EjemploInyeccion1Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [])
], EjemploInyeccion1Service);
exports.EjemploInyeccion1Service = EjemploInyeccion1Service;
exports.EjemploInyeccion1ServiceProveedor = {
    provide: EjemploInyeccion1Service,
    useClass: EjemploInyeccion1Service
};
// Inyección de clase cuyo constructor tiene parámetros.
// Este es el caso es un poco más complejo. Debemos usar FactoryProvider.
var EjemploInyeccion2Service = (function () {
    function EjemploInyeccion2Service(_texto) {
        this._texto = _texto;
    }
    EjemploInyeccion2Service.prototype.obtenerMensaje = function () {
        return "Soy un mensaje procedente de " + this._texto + ".";
    };
    return EjemploInyeccion2Service;
}());
EjemploInyeccion2Service = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [String])
], EjemploInyeccion2Service);
exports.EjemploInyeccion2Service = EjemploInyeccion2Service;
exports.EjemploInyeccion2ServiceProveedor = {
    provide: EjemploInyeccion2Service,
    useFactory: function () {
        return new EjemploInyeccion2Service("EjemploInyeccion2Service");
    }
};
// Inyección de tipos primitivos como dependencia.
// Tenemos que generar un token específico para evitar "chocar" con otras inyecciones
// de terceros.
exports.EjemploInyeccion3 = new core_1.OpaqueToken("EjemploInyeccion3");
exports.EjemploInyeccion3Proveedor = {
    provide: exports.EjemploInyeccion3,
    useValue: "Soy un mensaje procedente de EjemploInyeccion3."
};
//# sourceMappingURL=inyeccion.service.js.map