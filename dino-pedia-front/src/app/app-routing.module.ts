import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinosaursComponent } from './dinosaurs/dinosaurs.component';
import { AddDinosaurComponent } from './adding/add-dinosaur/add-dinosaur.component';
import { EditDinosaurComponent } from './editing/edit-dinosaur/edit-dinosaur.component';

const routes: Routes = [{
  path: '',
  component: DinosaursComponent
}, {
  path: 'add-dinosaur',
  component: AddDinosaurComponent,
}, {
  path: 'edit-dinosaur/:id',
  component: EditDinosaurComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
