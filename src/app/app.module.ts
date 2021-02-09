import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { FormsModule } from '@angular/forms';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JsonPipe } from '@angular/common';
import { EditpagePage } from '../app/editpage/editpage.page';
import { AddnewpersonPage } from './addnewperson/addnewperson.page';

@NgModule({
  declarations: [AppComponent, EditpagePage, AddnewpersonPage],
  entryComponents: [EditpagePage, AddnewpersonPage],
  imports: [
    FormsModule,
    BrowserModule, 
    IonicModule.forRoot(), 
    AppRoutingModule, 
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    HttpClient,
    JsonPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
