import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CreateOrUpdateDinosaur } from 'src/app/dinosaurs/create-or-update-dinosaur';
import { DinosaursService } from 'src/app/dinosaurs/dinosaurs.service';

@Component({
  selector: 'app-edit-dinosaur',
  templateUrl: './edit-dinosaur.component.html',
  styleUrls: ['./edit-dinosaur.component.scss']
})
export class EditDinosaurComponent implements OnInit {

  constructor(private route: ActivatedRoute, private dinosaurService: DinosaursService, private router: Router) { }

  itemId: string = '';

  dinosaurs: CreateOrUpdateDinosaur = {
    name: '',
    period: '',
    diet: '',
  };

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.itemId = params.get('id') ?? '';
      this.getById();
    })
  }

  getById() {
    console.log('imam id')
    this.dinosaurService.getById(this.itemId).subscribe((data) => {
      this.dinosaurs.name = data.name;
      this.dinosaurs.period = data.period;
      this.dinosaurs.diet = data.diet;
    })
  }

  update() {
    console.log('Update se trbao dogoditi')
    this.dinosaurService.update(this.itemId, this.dinosaurs).subscribe(() => {
      this.router.navigate(['/']);
    })
  }

}
