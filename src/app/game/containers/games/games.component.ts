import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'val-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.scss']
})
export class GamesComponent implements OnInit {

  gameList=[
    {id:1, name:"mario", console:"nes"},
    {id:2, name:"zelda wind waker", console:"gamecube"},
    {id:3, name:"final fanatasy IX", console:"playstation 1"},
    {id:4, name:"Persona 5", console:"playstation 4"}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
