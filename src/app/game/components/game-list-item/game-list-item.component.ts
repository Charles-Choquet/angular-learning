import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Game } from '../../models/Game';

@Component({
  selector: 'val-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss']
})
export class GameListItemComponent {

  @Input() game!: Game;
  @Output() onGameClicked: EventEmitter<Game> = new EventEmitter();  
  
  constructor() {}

  selectGame() : void {
    this.onGameClicked.emit(this.game)    
  }

}
