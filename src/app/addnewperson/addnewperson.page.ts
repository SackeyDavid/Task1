import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { saveAs } from 'file-saver';

// const fs = require('fs-extra')

@Component({
  selector: 'app-addnewperson',
  templateUrl: './addnewperson.page.html',
  styleUrls: ['./addnewperson.page.scss'],
})
export class AddnewpersonPage implements OnInit {

  id: number
  persons_data: any
  name: string
  dob: string
  skills: any
  contact: string


  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.id = this.navParams.get('id')
    
    this.persons_data = this.dataservice.getPersons()
  }

  dismiss() {
    this.modalController.dismiss()
  }

  add() {
    let person = {
      id: this.id,
      name: this.name,
      dob: this.dob,
      skills: this.skills,
      contact: this.contact,
    }

    this.persons_data.push(person)
    console.log(this.persons_data)
    // for (let i = 0; i < this.persons_data.length; i++) {
    //   if(this.persons_data[i].id == this.id) {
    //     this.persons_data[i].name = this.name
    //     this.persons_data[i].dob = this.dob
    //     this.persons_data[i].skills = this.skills
    //     this.persons_data[i].contact = this.contact

    //   } 
    // }

      const blob = new Blob([JSON.stringify(this.persons_data)], {type: 'application/json'});
      saveAs(blob, 'data.json')
    
  }

}
