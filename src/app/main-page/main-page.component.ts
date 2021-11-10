import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  animations: [
    trigger('moveHeart', [
      state('alive', style({
        top: "0px"
      })),
      state('dead', style({
        top: "0px",
        right: "400px"
      })),
      transition('alive => dead', [
        animate('1s', keyframes([
          style({})
        ]))
      ])/*,
      transition('dead => alive', [
        animate('1s', keyframes([
          style({ top: "0px", offset: 0 }),
          style({ top: "-100px", offset: .33 }),
          style({ top: "0px", offset: .66})
        ]))
      ])*/
    ])
  ]
})
export class MainPageComponent implements OnInit {

  state = true;

  constructor() { }

  ngOnInit(): void {
  }

  changeState() {
    this.state = !this.state;
  }

}
