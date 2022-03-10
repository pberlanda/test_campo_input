import { Component, OnInit } from '@angular/core';
// @Component è un decorator, serve a specificare a angular che questa
// è una classe di tipo componente e indica il selector, e file html e css correlati
// sono dei metadata necessari ad angular per definire il componente
@Component({
  selector: 'app-campoinput',
  templateUrl: './campoinput.component.html',
  styleUrls: ['./campoinput.component.css'],
})
export class CampoinputComponent implements OnInit {
  name: string = '_____pb_____';
  constructor() {}

  ngOnInit() {}
}
