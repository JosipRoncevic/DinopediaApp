import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateOrUpdateDinosaur } from 'src/app/dinosaurs/create-or-update-dinosaur';
import { DinosaursService } from 'src/app/dinosaurs/dinosaurs.service';

@Component({
  selector: 'app-add-dinosaur',
  templateUrl: './add-dinosaur.component.html',
  styleUrls: ['./add-dinosaur.component.scss']
})
export class AddDinosaurComponent implements OnInit {

  dinosaurs: CreateOrUpdateDinosaur = {
    name: '',
    period: '',
    diet: '',
  };

  errorMessage: string = '';

  constructor(private dinosaurService: DinosaursService, private router: Router) { }

  ngOnInit(): void { }

  create() {
    this.dinosaurService.create(this.dinosaurs).subscribe({
      next: () => this.router.navigate(['/']),
      error: (error) => this.handleError(error)
    });
  }

  handleError(error: any) {
    if (error.status === 400) {
      this.errorMessage = 'All fields are required.';
    } else {
      this.errorMessage = 'An unexpected error occurred. Please try again later.';
    }
  }
}
