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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require("@angular/core");
var inyeccion_service_1 = require("./inyeccion.service");
var InyeccionComponent = (function () {
    function InyeccionComponent(_servicio1, _servicio2, _primitivo) {
        this._servicio1 = _servicio1;
        this._servicio2 = _servicio2;
        this._primitivo = _primitivo;
    }
    InyeccionComponent.prototype.ngOnInit = function () {
        this.mensaje1 = this._servicio1.obtenerMensaje();
        this.mensaje2 = this._servicio2.obtenerMensaje();
        this.mensaje3 = this._primitivo;
    };
    return InyeccionComponent;
}());
InyeccionComponent = __decorate([
    core_1.Component({
        selector: "ejemplos-inyeccion",
        templateUrl: "./app/ejemplos/inyeccion.component.html"
    }),
    __param(2, core_1.Inject(inyeccion_service_1.EjemploInyeccion3)),
    __metadata("design:paramtypes", [inyeccion_service_1.EjemploInyeccion1Service,
        inyeccion_service_1.EjemploInyeccion2Service, String])
], InyeccionComponent);
exports.InyeccionComponent = InyeccionComponent;
//# sourceMappingURL=inyeccion.component.js.map