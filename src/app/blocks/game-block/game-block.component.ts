import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-block',
  templateUrl: './game-block.component.html',
  styleUrls: ['./game-block.component.scss']
})
export class GameBlockComponent {
  @Input() image = 'https://f.allegroimg.com/s512/03fd92/1360c25d44cdb00a7b1941b50b2f/Naklejki-na-sciane-3D-Kubus-Puchatek-160x110cm';
  @Input() title = 'Kubuś Puchatek';

  constructor() { }

}
