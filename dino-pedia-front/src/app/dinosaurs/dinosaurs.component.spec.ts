import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinosaursComponent } from './dinosaurs.component';

describe('DinosaursComponent', () => {
  let component: DinosaursComponent;
  let fixture: ComponentFixture<DinosaursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DinosaursComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(DinosaursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
