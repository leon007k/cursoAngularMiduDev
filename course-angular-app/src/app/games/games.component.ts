import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-games',
  standalone: true,
  imports: [],
  template: `
    <p>Que juego te interesa {{ userName }}?</p>
    <ul>
      @for (game of games; track game.id) {
      <li (click)="favGame(game.name)">{{ game.name }}</li>
      }
    </ul>
  `,
  styles: ``,
})
export class GamesComponent {
  // * Esta comunicacion es de padre a hijo
  @Input() userName = '';
  /*
   * Esta comunicacion es de hijo a padre
   * el EventEmitter es un tipo de dato que se usa para emitir eventos
   * junto con el Output se puede emitir eventos al padre
   */
  @Output() sendFavGame = new EventEmitter<string>();

  /*
   * Este metodo se ejecuta cuando se hace click en un juego
   * y emite el nombre del juego favorito al padre
   * con el metodo emit de EventEmitter
   */
  favGame(gameName: string) {
    this.sendFavGame.emit(gameName);
  }

  games = [
    {
      id: 1,
      name: 'Super Mario Bros.',
    },
    {
      id: 2,
      name: 'Zelda',
    },
    {
      id: 3,
      name: 'Donkey Kong',
    },
  ];
}
