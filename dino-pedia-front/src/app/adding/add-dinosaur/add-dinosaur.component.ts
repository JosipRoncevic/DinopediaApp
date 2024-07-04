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

  constructor(private dinosaurService: DinosaursService, private router: Router) { }

  ngOnInit(): void { }

  create() {
    console.log('Create button clicked');
    this.dinosaurService.create(this.dinosaurs).subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
