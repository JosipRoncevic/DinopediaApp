import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDinosaurComponent } from './edit-dinosaur.component';

describe('EditDinosaurComponent', () => {
  let component: EditDinosaurComponent;
  let fixture: ComponentFixture<EditDinosaurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditDinosaurComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditDinosaurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
