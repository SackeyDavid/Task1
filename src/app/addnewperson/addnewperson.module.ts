import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddnewpersonPageRoutingModule } from './addnewperson-routing.module';

import { AddnewpersonPage } from './addnewperson.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddnewpersonPageRoutingModule
  ],
  declarations: [AddnewpersonPage]
})
export class AddnewpersonPageModule {}
