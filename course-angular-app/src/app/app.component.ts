import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { CommentsComponent } from './comments/comments.component';

@Component({
  // * El selector nos permite usar el componente como una etiqueta HTML
  // * Por lo que en el index.html se puede usar <app-root></app-root>
  selector: 'app-root',
  standalone: true,
  // * El import nos permite usar otros componentes dentro de este componente
  imports: [RouterOutlet, UserComponent, CommentsComponent],
  // * El template es el HTML que se va a renderizar
  templateUrl: './app.component.html',
  // template: `<h1>Hola mundo desde {{ city.toUpperCase() }}</h1> <app-user />`,
  // * El styleUrl es el CSS que se va a renderizar
  styleUrl: './app.component.css',
})
export class AppComponent {
  city = 'Madrid';
}
