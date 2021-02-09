import { Injectable } from '@angular/core';
import { DataService } from './data.service';


@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private person = [];

  constructor(
    private dataService: DataService,
  ) { }

  getData() {
    return this.dataService.getPersons()
  }

  getPerson() {
    return this.person;
  }

  add() {

  }

  modify() {

  }

  delete() {

  }
}
