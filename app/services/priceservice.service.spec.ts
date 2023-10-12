import { TestBed } from '@angular/core/testing';

import { PriceserviceService } from './priceservice.service';

describe('PriceserviceService', () => {
  let service: PriceserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PriceserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
