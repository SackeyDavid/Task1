import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public data: any
  // [{
  //                   "name":"John Doe",
  //                   "dob": "19-09-1973",
  //                   "skills":["PHP","NodeJS","HTML"],
  //                   "contact":"123 459 678 0"
  //               },{
  //                   "name":"Sam Wise",
  //                   "dob": "19-09-1973",
  //                   "skills":["PHP","NodeJS","HTML"],
  //                   "contact":"123 459 678 0"
  //               },{
  //                   "name":"Kojo Koomson",
  //                   "dob": "19-09-1973",
  //                   "skills":["PHP","NodeJS","HTML"],
  //                   "contact":"123 459 678 0"
  //               },{
  //                   "name":"Kwame Dickson",
  //                   "dob": "19-09-1973",
  //                   "skills":[],
  //                   "contact":"123 459 678 0"
  //               },{
  //                   "name":"Kwame Menu",
  //                   "dob": "19-09-1973",
  //                   "skills":["PHP","NodeJS","HTML"],
  //                   "contact":"123 459 678 0"
  //               },{
  //                   "name":"Abi Mills",
  //                   "dob": "19-09-1973",
  //                   "skills":["PHP","NodeJS","HTML"],
  //                   "contact":"123 459 678 0"
  //               }]


  constructor(
    private http: HttpClient,
  ) { 
    this.getPersons()
  }

  

  getPersons() {

    this.http.get("../../assets/data.json").subscribe(
      (data) => {
        this.data = <string>(data);
        
        
        for(var i = 0; i < this.data.length; i++) {

          this.data[i]["id"] = i + 1;
          // console.log(data)

        }

        // var finalArray = this.data.map(function (obj) {
        //   return obj
        // })

        // this.data = JSON.stringify(this.data)

        console.log(this.data)
      });

      return this.data

  }

  editData(id: number, column) {
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i].id == id) {

      }
      
    }
  }

  deleteData(id: number) {
    console.log(this.data, id)
    for (let i = 0; i < this.data.length; i++) {
      if(this.data[i].id == id) {
        this.data.splice(i, 1)
        console.log(this.data)
      }
      
    }
  }


}
