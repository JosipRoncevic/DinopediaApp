import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinosaursModule } from './dinosaurs/dinosaurs.module';
import { NavComponent } from './nav/nav.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AddDinosaurComponent } from './adding/add-dinosaur/add-dinosaur.component';
import { FormsModule } from '@angular/forms';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { EditDinosaurComponent } from './editing/edit-dinosaur/edit-dinosaur.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DinosaursComponent,
    AddDinosaurComponent,
    EditDinosaurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
