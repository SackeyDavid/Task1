import { Component, OnInit } from '@angular/core';
import { PersonsService } from '../services/persons.service';
import { DataService } from '../services/data.service';
import { saveAs } from 'file-saver';
import { ModalController, AlertController } from '@ionic/angular';
import { EditpagePage } from '../../app/editpage/editpage.page'
// import { convertActionBinding } from '@angular/compiler/src/compiler_util/expression_converter';
// import { stringify } from 'querystring';
import { AddnewpersonPage } from '../addnewperson/addnewperson.page';
import { fs } from 'file-system';

// const fs = require('file-system')


@Component({
  selector: 'app-data',
  templateUrl: './data.page.html',
  styleUrls: ['./data.page.scss'],
})
export class DataPage implements OnInit {

  persons_data: any

  constructor(
    private personsservice: PersonsService,
    private dataservice: DataService,
    private modalController: ModalController,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {

    setTimeout(() => {
      this.persons_data = this.dataservice.getPersons()
    }, 400);
    
  }

  

  

  editPerson(id: number) {
    console.log(this.persons_data)
    for (let i = 0; i < this.persons_data.length; i++) {
      if(this.persons_data[i].id == id) {
        this.persons_data[i].name = 'Ama Joy'
      }       
    }

    
    const blob = new Blob([JSON.stringify(this.persons_data)], {type: 'application/json'});
    saveAs(blob, 'data.json')
  }

  async delete(id: number) {
    // this.dataservice.deleteData(id)
    const alert = await this.alertCtrl.create({
        header: "Do you to delete # "+ id  +" ?",
        // message: "Would you still place this one ? The previous "+word+" would be removed",    
        buttons: [
              {
                text: 'No',
                role: 'cancel',
                cssClass: 'secondary',
                handler: () => {
                  console.log('Confirm Cancel');
                }
              }, 
              {
                text: 'Yes',
                handler: () => { 
                  for (let i = 0; i < this.persons_data.length; i++) {
                    if(this.persons_data[i].id == id) {
                      this.persons_data.splice(i, 1)
                    }
                  }

                    
                    // const blob = new Blob([JSON.stringify(this.persons_data)], {type: 'application/json'});
                    // saveAs(blob, 'data.json')
                  
                }
              }
            ]
    });
    await alert.present();
    
  }


  async showEditModal(id: number) {
    let person = {
      id: 0,
      name: "",
      dob: "",
      skills: [],
      contact: "",
    }
    for (let i = 0; i < this.persons_data.length; i++) {
      if(this.persons_data[i].id == id) {
        person.id = this.persons_data[i].id
        person.name = this.persons_data[i].name
        person.dob = this.persons_data[i].dob
        person.skills = this.persons_data[i].skills
        person.contact = this.persons_data[i].contact
      }

      // const blob = new Blob([JSON.stringify(this.persons_data)], {type: 'application/json'});
      // saveAs(blob, 'data.json')
      
    }

    const modal = await this.modalController.create({
      mode: 'md',
      id: 'ion-overlay-0',
      component: EditpagePage,
      componentProps: { id: person.id, name: person.name, dob: person.dob, skills: person.skills, contact: person.contact  },
      showBackdrop: false,
      backdropDismiss: true,
      cssClass: 'edit-modal'
      });
      return await modal.present();
  }

  async addNewPerson() {
    let last_id = this.persons_data.length

    const modal = await this.modalController.create({
      mode: 'md',
      id: 'ion-overlay-0',
      component: AddnewpersonPage,
      componentProps: { id: last_id },
      showBackdrop: false,
      backdropDismiss: true,
      cssClass: 'edit-modal'
      });
      return await modal.present();

  }


  

}
