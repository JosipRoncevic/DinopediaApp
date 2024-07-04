import { TestBed } from '@angular/core/testing';

import { DinosaursService } from './dinosaurs.service';

describe('DinosaursService', () => {
  let service: DinosaursService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DinosaursService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
