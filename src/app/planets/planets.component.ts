import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  @Input() currentIndex: number = 0;
  @Output() sendMaxIndexEvent: EventEmitter<number> = new EventEmitter();
  @Output() sendResidentUrls: EventEmitter<Array<string>> = new EventEmitter();

  constructor (private swapi: SwapiService) {  }

  planetList: Array<any> = []; // Had Multiple Problems With
  isPlanetListComplete: boolean = false;

  ngOnInit () {
    this.addPlanetList(1);
    console.log(this.planetList)
  }

  addPlanetList (pageNumber: number) { // Nice Implementation
    this.swapi.getPlanetList(pageNumber).subscribe(
      (json: any) => {
        this.planetList.push(...json.results);

        if (json.next === null) {
          this.sendMaxIndexEvent.emit(this.planetList.length)
          this.isPlanetListComplete = true;

          return null;
        }

        return this.addPlanetList(pageNumber + 1);
      }
    )
  }

  checkIfPlanetIsVisible (planetIndex: number) {
    if ( this.isPlanetListComplete !== true ) { return false; }

    if (this.currentIndex !== planetIndex) { return false; }

    this.sendResidentUrls.emit(
      this.planetList[planetIndex].residents
    );

    return true;
  }

  checkIfPlanetsAvailable () {
    return this.planetList.length > 0;
  }
}
