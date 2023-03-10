import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  indexArray: Array<number> = [
    0, // Planets
    0, // Residents
    0, // Vehicles
  ];

  maxIndexArray: Array<number> = [
    0, // Planets
    0, // Residents
    0  // Vehicles
  ];

  residentUrls: Array<string> = [""];

  setMaxIndex(maxIndex: number, maxIndexIndex: number) {
    this.maxIndexArray[maxIndexIndex] = maxIndex;
  }

  setResidentUrls (urlsArray: Array<string>) {
    this.residentUrls = urlsArray;
  }

  changeCurrentIndex (indexVariable: number, change: number) {
    if (
      change > 0 &&
      this.indexArray[indexVariable] >= (this.maxIndexArray[indexVariable] - 1)
    ) { return; }
    else if (
      change < 0 &&
      this.indexArray[indexVariable] <= 0
    ) { return; }

    this.indexArray[indexVariable] += change;
  }
}
