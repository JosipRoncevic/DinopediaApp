import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { AddDinosaurComponent } from './adding/add-dinosaur/add-dinosaur.component';
import { EditDinosaurComponent } from './editing/edit-dinosaur/edit-dinosaur.component';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', component: DinosaursComponent, },
  { path: 'add-dinosaur', component: AddDinosaurComponent },
  { path: 'edit-dinosaur/:id', component: EditDinosaurComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
