import { Directive, TemplateRef, ViewContainerRef, Input } from "@angular/core";

@Directive({
    selector: "[kcConRetraso]"
})
export class DirectivaEstructuralDirective {

    @Input("kcConRetraso") set retraso(milisegundos: number) {
        setTimeout(() => {
            this._viewContainerRef.createEmbeddedView(this._templateRef);
        }, milisegundos);
    }

    constructor(
        private _templateRef: TemplateRef<any>,
        private _viewContainerRef: ViewContainerRef) { }
}