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
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
// Para que una clase se comporte como un servicio
// es necesario decorarla con 'Injectable'.
var ContactosService = (function () {
    function ContactosService(_http) {
        this._http = _http;
        this._rutaApiContactos = "http://localhost:3005/contactos";
    }
    ContactosService.prototype.obtenerContactos = function () {
        return this._http
            .get(this._rutaApiContactos)
            .map(function (datos) {
            return datos.json();
        });
    };
    ContactosService.prototype.agregarContacto = function (contacto) {
        return this._http
            .post(this._rutaApiContactos, contacto)
            .map(function (datos) {
            return datos.json();
        });
    };
    ContactosService.prototype.eliminarContacto = function (contacto) {
        return this._http
            .delete(this._rutaApiContactos + "/" + contacto.id);
    };
    return ContactosService;
}());
ContactosService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ContactosService);
exports.ContactosService = ContactosService;
//# sourceMappingURL=contactos.service.js.map