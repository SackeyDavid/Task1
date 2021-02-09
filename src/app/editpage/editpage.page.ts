import { Component, OnInit } from '@angular/core';
import { NavParams, ModalController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-editpage',
  templateUrl: './editpage.page.html',
  styleUrls: ['./editpage.page.scss'],
})
export class EditpagePage implements OnInit {

  id: number
  name: string
  dob: string
  skills: any
  contact: string

  persons_data: any

  constructor(
    private navParams: NavParams,
    private modalController: ModalController,
    private dataservice: DataService
  ) { }

  ngOnInit() {
    this.persons_data = this.dataservice.getPersons()
    this.id = this.navParams.get('id')
    this.name = this.navParams.get('name')
    this.dob = this.navParams.get('dob')
    this.skills = this.navParams.get('skills')
    this.contact = this.navParams.get('contact')
  }

  dismiss() {
    this.modalController.dismiss()
  }

  save() {
    for (let i = 0; i < this.persons_data.length; i++) {
      if(this.persons_data[i].id == this.id) {
        this.persons_data[i].name = this.name
        this.persons_data[i].dob = this.dob
        this.persons_data[i].skills = this.skills
        this.persons_data[i].contact = this.contact

      } 
      
    }

    
    const blob = new Blob([JSON.stringify(this.persons_data)], {type: 'application/json'});
    saveAs(blob, 'data.json')
  }

}
