import { Component, OnInit } from '@angular/core';
import { DinosaursService } from './dinosaurs.service';
import { Observable } from 'rxjs';
import { Dinosaur } from './dinosaur';

declare var window: any;

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.scss']
})
export class DinosaursComponent implements OnInit {
  showAddForm = false;

  dinosaurs: Dinosaur[] = [];
  deleteModal: any;
  itemToDelete: string = '';
  constructor(private dinosaurService: DinosaursService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(document.getElementById("deleteModal"));
    this.getAll();
  }
  openDeletePopup(id: number) {
    this.itemToDelete = id.toString();
    this.deleteModal.show();
  }

  getAll() {
    this.dinosaurService.getDinosaurs().subscribe((data) => {
      this.dinosaurs = data;
    })
  }

  delete() {
    this.dinosaurService.delete(this.itemToDelete).subscribe(() => {
      this.dinosaurs = this.dinosaurs.filter(_ => _.id !== +this.itemToDelete);
      this.deleteModal.hide();
    })
  }
}
