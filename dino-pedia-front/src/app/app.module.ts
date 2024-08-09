import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HttpClientModule } from '@angular/common/http';
import { AddDinosaurComponent } from './adding/add-dinosaur/add-dinosaur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { EditDinosaurComponent } from './editing/edit-dinosaur/edit-dinosaur.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    DinosaursComponent,
    AddDinosaurComponent,
    EditDinosaurComponent,
    SignupComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [AuthService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
