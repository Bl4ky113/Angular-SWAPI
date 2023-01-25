import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  constructor () {  }

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


  setMaxIndex(maxIndex: number, maxIndexIndex: number) {
    this.maxIndexArray[maxIndexIndex] = maxIndex;
  }

  changeCurrentIndex (indexVariable: number, change: number) { // Simple Implementation
    console.log(indexVariable, change);
    if (
      change > 0 &&
      this.indexArray[indexVariable] >= (this.maxIndexArray[indexVariable] - 1)
    ) { return; }
    else if (
      change < 0 &&
      this.indexArray[indexVariable] <= 0
    ) { return; }

    this.indexArray[indexVariable] += change;
    console.log(this.indexArray[indexVariable]);
  }
}
