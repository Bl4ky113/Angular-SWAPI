import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  indexPlanets: number = 62;
  indexResidents: number = 0;
  indexVehicles: number = 0;

  changeCurrentIndex (indexVariable: number, change: number) {
    if (change > 0 && indexVariable === 0) { return }


  }
}
