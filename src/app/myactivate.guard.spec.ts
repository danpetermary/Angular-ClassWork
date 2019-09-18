import { TestBed, async, inject } from '@angular/core/testing';

import { MyactivateGuard } from './myactivate.guard';

describe('MyactivateGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyactivateGuard]
    });
  });

  it('should ...', inject([MyactivateGuard], (guard: MyactivateGuard) => {
    expect(guard).toBeTruthy();
  }));
});
