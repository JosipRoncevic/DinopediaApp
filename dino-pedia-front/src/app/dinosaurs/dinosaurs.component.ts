import { Component, OnInit, AfterViewInit } from '@angular/core';
import { DinosaursService } from './dinosaurs.service';
import { Dinosaur } from './dinosaur';
import { AuthService } from '../auth/auth.service';
import { emiters } from '../emitters/emitters';

declare var window: any;

@Component({
  selector: 'app-dinosaurs',
  templateUrl: './dinosaurs.component.html',
  styleUrls: ['./dinosaurs.component.scss']
})
export class DinosaursComponent implements OnInit, AfterViewInit {
  message = '';
  dinosaurs: Dinosaur[] = [];
  deleteModal: any;
  itemToDelete: string = '';
  isAuthenticated: boolean = false;

  constructor(private dinosaurService: DinosaursService, private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().subscribe(
      (res: any) => {
        this.message = `Hi ${res.userName}`;
        emiters.authEmitter.emit(true);
        this.isAuthenticated = true;
      }, (err: any) => {
        this.message = 'You are not logged in.';
        emiters.authEmitter.emit(false);
        this.isAuthenticated = false;
      }
    );
    this.getAll();
  }

  ngAfterViewInit(): void {
    this.deleteModal = new window.bootstrap.Modal(document.getElementById("deleteModal"));
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
