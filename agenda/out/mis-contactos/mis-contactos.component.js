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
var router_1 = require("@angular/router");
var contactos_service_1 = require("../contactos.service");
var MisContactosComponent = (function () {
    // Hacemos la inyección de dependencias del servicio. Aprovechamos
    // que TypeScript crea un atributo de aquellos argumentos que tienen
    // modificador de acceso y están tipados.
    function MisContactosComponent(_contactosService, _activatedRoute) {
        this._contactosService = _contactosService;
        this._activatedRoute = _activatedRoute;
    }
    // El método 'ngOnInit' viene dado por la interfaz 'OnInit', que es el
    // hook en el cual inicializamos los valores del componente.
    MisContactosComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._activatedRoute.data.forEach(function (data) {
            _this.listaContactos = data.contactos;
        });
    };
    MisContactosComponent.prototype.eliminarContacto = function (contacto) {
        var _this = this;
        // Preguntamos al usuario si está seguro de eliminar al contacto.
        if (confirm("\u00BFEst\u00E1s seguro de eliminar a " + contacto.nombre + "?")) {
            // En caso de estar seguro, lo eliminamos.
            this._contactosService
                .eliminarContacto(contacto)
                .subscribe(function () {
                _this.contactoSeleccionado = null;
                _this.listaContactos = _this.listaContactos.filter(function (c) { return c.id !== contacto.id; });
            });
        }
    };
    MisContactosComponent.prototype.verDetallesContacto = function (contacto) {
        this.contactoSeleccionado = contacto;
    };
    MisContactosComponent.prototype.navegarRuta = function (ruta) {
        window.open(ruta, "_blank");
    };
    return MisContactosComponent;
}());
MisContactosComponent = __decorate([
    core_1.Component({
        templateUrl: "./app/mis-contactos/mis-contactos.component.html"
    }),
    __metadata("design:paramtypes", [contactos_service_1.ContactosService,
        router_1.ActivatedRoute])
], MisContactosComponent);
exports.MisContactosComponent = MisContactosComponent;
//# sourceMappingURL=mis-contactos.component.js.map