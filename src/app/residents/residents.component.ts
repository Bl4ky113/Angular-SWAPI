import { Component, Input, OnInit } from '@angular/core';

import { SwapiService } from '../services/swapi.service';

@Component({
  selector: 'residents',
  templateUrl: './residents.component.html',
  styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {
  @Input() requestUrls: Array<string> = [""];

  constructor (private swapi: SwapiService) {  }

  personsList: Array<any> = [];
  isPersonsListComplete: boolean = false;


  ngOnInit () {
    this.getPersonsList();
  }

  getPersonsList () {
    let list: Array<any> = [];
    for (let personUrl of this.requestUrls) {
      if ( personUrl == "" ) {
        break;
      }

      this.swapi.getPersonFromUrl(personUrl).subscribe(
        (json: any) => {
          list.push(...json.results);
        }
      )
    }

    if (list.length <= 0) {
      return;
    }


    this.isPersonsListComplete = true;
    this.personsList = list;

    console.log(list);
    console.log(this.personsList)
  }
}
