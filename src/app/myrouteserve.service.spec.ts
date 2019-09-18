import { TestBed } from '@angular/core/testing';

import { MyrouteserveService } from './myrouteserve.service';

describe('MyrouteserveService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyrouteserveService = TestBed.get(MyrouteserveService);
    expect(service).toBeTruthy();
  });
});
