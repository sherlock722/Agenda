import { Component } from '@angular/core';

@Component({
  // En 'selector' indicamos el elemento HTML en el cuál
  // se instanciará el componente.
  selector: 'my-app',
  // En 'template' indicamos la vista asociada al componente.
  //template: `<h1>Hello {{name}}</h1>`,
  // En 'templateUrl' indicamos la ruta a un template externo.
  templateUrl: "./app/app.component.html"
})
export class AppComponent { }