import { TestBed } from '@angular/core/testing';

import { SalesPersonServiceService } from './sales-person-service.service';

describe('SalesPersonServiceService', () => {
  let service: SalesPersonServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SalesPersonServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
