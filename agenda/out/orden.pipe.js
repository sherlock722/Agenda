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
var OrdenPipe = (function () {
    function OrdenPipe() {
    }
    OrdenPipe.prototype.transform = function (contactos, orden) {
        var contactosOrdenados;
        // En caso de ordenación ascendente.
        if (orden === "asc") {
            contactosOrdenados = contactos.sort(function (contactoA, contactoB) {
                var nombreContactoA = (contactoA.nombre + " " + contactoA.apellidos).toLowerCase();
                var nombreContactoB = (contactoB.nombre + " " + contactoB.apellidos).toLowerCase();
                return nombreContactoA > nombreContactoB ? 1 : nombreContactoA < nombreContactoB ? -1 : 0;
            });
        }
        else {
            contactosOrdenados = contactos.sort(function (contactoA, contactoB) {
                var nombreContactoA = (contactoA.nombre + " " + contactoA.apellidos).toLowerCase();
                var nombreContactoB = (contactoB.nombre + " " + contactoB.apellidos).toLowerCase();
                return nombreContactoB > nombreContactoA ? 1 : nombreContactoB < nombreContactoA ? -1 : 0;
            });
        }
        return contactosOrdenados;
    };
    return OrdenPipe;
}());
OrdenPipe = __decorate([
    core_1.Pipe({
        name: "Ordenar"
    }),
    __metadata("design:paramtypes", [])
], OrdenPipe);
exports.OrdenPipe = OrdenPipe;
//# sourceMappingURL=orden.pipe.js.map