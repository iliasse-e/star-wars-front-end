import { TestBed } from '@angular/core/testing';

import { RebelleServiceService } from './rebelle.service.service';

describe('RebelleServiceService', () => {
  let service: RebelleServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RebelleServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
