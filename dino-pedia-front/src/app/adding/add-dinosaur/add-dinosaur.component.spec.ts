import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDinosaurComponent } from './add-dinosaur.component';

describe('AddDinosaurComponent', () => {
  let component: AddDinosaurComponent;
  let fixture: ComponentFixture<AddDinosaurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddDinosaurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddDinosaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
