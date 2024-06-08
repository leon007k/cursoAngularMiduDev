import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  // * El selector nos permite usar el componente como una etiqueta HTML
  // * Por lo que en el index.html se puede usar <app-root></app-root>
  selector: 'app-root',
  standalone: true,
  // * El import nos permite usar otros componentes dentro de este componente
  imports: [RouterOutlet],
  // * El template es el HTML que se va a renderizar
  templateUrl: './app.component.html',
  // * El styleUrl es el CSS que se va a renderizar
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'course-angular-app';
}
