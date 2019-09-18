import { TestBed } from '@angular/core/testing';

import { MyloginService } from './mylogin.service';

describe('MyloginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyloginService = TestBed.get(MyloginService);
    expect(service).toBeTruthy();
  });
});
