import { TestBed } from '@angular/core/testing';

import { FoodTsService } from './food.ts.service';

describe('FoodTsService', () => {
  let service: FoodTsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodTsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
