import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'val-game-list-item',
  templateUrl: './game-list-item.component.html',
  styleUrls: ['./game-list-item.component.scss']
})
export class GameListItemComponent implements OnInit {

  @Input() game: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
