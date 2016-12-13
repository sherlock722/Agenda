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
var common_1 = require("@angular/common");
var EjemplosPipesComponent = (function () {
    function EjemplosPipesComponent(_slicePipe) {
        this._slicePipe = _slicePipe;
        this.cantidad = 32.7;
        this.mensaje = "HoLa! BuEnAs NoChEs KeEpCoDeRs!";
        this.coleccion = [
            "uno",
            "dos",
            "tres",
            "cuatro",
            "cinco"
        ];
    }
    EjemplosPipesComponent.prototype.ngOnInit = function () {
        this.coleccionTroceada = this._slicePipe.transform(this.coleccion, 2, 4);
    };
    return EjemplosPipesComponent;
}());
EjemplosPipesComponent = __decorate([
    core_1.Component({
        selector: "ejemplos-pipes",
        templateUrl: "./app/ejemplos/pipes.component.html"
    }),
    __metadata("design:paramtypes", [common_1.SlicePipe])
], EjemplosPipesComponent);
exports.EjemplosPipesComponent = EjemplosPipesComponent;
//# sourceMappingURL=pipes.component.js.map