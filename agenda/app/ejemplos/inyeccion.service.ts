import {
    Injectable,
    OpaqueToken,
    ClassProvider,
    ValueProvider,
    FactoryProvider } from "@angular/core";

// Inyección de clase como dependencia.
// Este es el caso más sencillo. Utilizamos un ClassProvider.
@Injectable()
export class EjemploInyeccion1Service {

    obtenerMensaje(): string {
        return "Soy un mensaje procedente de EjemploInyeccion1Service.";
    }
}

export const EjemploInyeccion1ServiceProveedor: ClassProvider = {
    provide: EjemploInyeccion1Service,
    useClass: EjemploInyeccion1Service
};

// Inyección de clase cuyo constructor tiene parámetros.
// Este es el caso es un poco más complejo. Debemos usar FactoryProvider.
@Injectable()
export class EjemploInyeccion2Service {

    constructor(private _texto: string) { }

    obtenerMensaje(): string {
        return `Soy un mensaje procedente de ${this._texto}.`;
    }
}

export const EjemploInyeccion2ServiceProveedor: FactoryProvider = {
    provide: EjemploInyeccion2Service,
    useFactory: () => {
        return new EjemploInyeccion2Service("EjemploInyeccion2Service");
    }
}

// Inyección de tipos primitivos como dependencia.
// Tenemos que generar un token específico para evitar "chocar" con otras inyecciones
// de terceros.
export const EjemploInyeccion3: OpaqueToken = new OpaqueToken("EjemploInyeccion3");

export const EjemploInyeccion3Proveedor: ValueProvider = {
    provide: EjemploInyeccion3,
    useValue: "Soy un mensaje procedente de EjemploInyeccion3."
};