import { TestBed } from '@angular/core/testing';

import { ServicetService } from './servicet.service';

describe('ServicetService', () => {
  let service: ServicetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
