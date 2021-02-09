import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data = [{
              "name":"John Doe",
              "dob": "19-09-1973",
              "skills":["PHP","NodeJS","HTML"],
              "contact":"123 459 678 0"
          },{
              "name":"Sam Wise",
              "dob": "19-09-1973",
              "skills":["PHP","NodeJS","HTML"],
              "contact":"123 459 678 0"
          },{
              "name":"Kojo Koomson",
              "dob": "19-09-1973",
              "skills":["PHP","NodeJS","HTML"],
              "contact":"123 459 678 0"
          },{
              "name":"Kwame Dickson",
              "dob": "19-09-1973",
              "skills":[],
              "contact":"123 459 678 0"
          },{
              "name":"Kwame Menu",
              "dob": "19-09-1973",
              "skills":["PHP","NodeJS","HTML"],
              "contact":"123 459 678 0"
          },{
              "name":"Abi Mills",
              "dob": "19-09-1973",
              "skills":["PHP","NodeJS","HTML"],
              "contact":"123 459 678 0"
          }]

  constructor(
    private router: Router
  ) {}

  signup() {
    this.router.navigate(['what-is-your-number'])
  }

  login() {
    this.router.navigate(['login'])
  }

}
