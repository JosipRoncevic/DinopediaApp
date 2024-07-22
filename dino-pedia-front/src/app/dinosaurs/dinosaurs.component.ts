import { Component, OnInit } from '@angular/core';
import { DinosaursService } from './dinosaurs.service';
import { Dinosaur } from './dinosaur';

declare var window: any;

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.scss']
})
export class DinosaursComponent implements OnInit {
  dinosaurs: Dinosaur[] = [];
  deleteModal: any;
  itemToDelete: string = '';

  constructor(private dinosaurService: DinosaursService) { }

  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(document.getElementById("deleteModal"));
    this.getAll();
  }

  openDeletePopup(id: string) {
    this.itemToDelete = id;
    this.deleteModal.show();
  }

  getAll() {
    this.dinosaurService.getDinosaurs().subscribe((data) => {
      this.dinosaurs = data;
    });
  }

  delete() {
    this.dinosaurService.delete(this.itemToDelete).subscribe(() => {
      this.dinosaurs = this.dinosaurs.filter(_ => _._id !== this.itemToDelete);
      this.deleteModal.hide();
    });
  }
}
