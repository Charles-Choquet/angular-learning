import { Component, Input } from '@angular/core';

@Component({
  selector: 'val-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss']
})
export class GameListItemComponent {

  @Input() game: any;
  
  constructor() { }

  getDetail() {
    console.log('you clicked on the user');
  }

}
