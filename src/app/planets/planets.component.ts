import { Component, OnInit, Input } from '@angular/core';

import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})
export class PlanetsComponent implements OnInit {
  @Input() currentIndex: number = 0;

  constructor (private swapi: SwapiService) {  }

  planet_list: Array<any> = []; // Had Multiple Problems With

  ngOnInit () {
    this.addPlanetList(1);
    console.log(this.planet_list)
  }

  addPlanetList (pageNumber: number) { // Nice Implementation
    this.swapi.getPlanetList(pageNumber).subscribe(
      (json: any) => {
        this.planet_list.push(...json.results);

        if (json.next === null) {
          return null;
        }

        return this.addPlanetList(pageNumber + 1);
      }
    )
  }

  checkIfPlanetIsVisible (planetIndex: number) {
    if (this.currentIndex !== planetIndex) { return false; }

    return true;
  }
}
