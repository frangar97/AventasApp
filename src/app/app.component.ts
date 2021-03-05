import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() { }

  MENU = [
    {
      titulo: "Pineo",
      ruta: "/pineo"
    },
    {
      titulo: "Check in/ Check out",
      ruta: "/check"
    },
  ];

}
