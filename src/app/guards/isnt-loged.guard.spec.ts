import { TestBed } from '@angular/core/testing';

import { IsntLogedGuard } from './isnt-loged.guard';

describe('IsntLogedGuard', () => {
  let guard: IsntLogedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(IsntLogedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
