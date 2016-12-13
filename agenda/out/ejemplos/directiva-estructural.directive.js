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
var DirectivaEstructuralDirective = (function () {
    function DirectivaEstructuralDirective(_templateRef, _viewContainerRef) {
        this._templateRef = _templateRef;
        this._viewContainerRef = _viewContainerRef;
    }
    Object.defineProperty(DirectivaEstructuralDirective.prototype, "retraso", {
        set: function (milisegundos) {
            var _this = this;
            setTimeout(function () {
                _this._viewContainerRef.createEmbeddedView(_this._templateRef);
            }, milisegundos);
        },
        enumerable: true,
        configurable: true
    });
    return DirectivaEstructuralDirective;
}());
__decorate([
    core_1.Input("kcConRetraso"),
    __metadata("design:type", Number),
    __metadata("design:paramtypes", [Number])
], DirectivaEstructuralDirective.prototype, "retraso", null);
DirectivaEstructuralDirective = __decorate([
    core_1.Directive({
        selector: "[kcConRetraso]"
    }),
    __metadata("design:paramtypes", [core_1.TemplateRef,
        core_1.ViewContainerRef])
], DirectivaEstructuralDirective);
exports.DirectivaEstructuralDirective = DirectivaEstructuralDirective;
//# sourceMappingURL=directiva-estructural.directive.js.map