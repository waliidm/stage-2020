import { TestBed } from '@angular/core/testing';

import { SuperRouteGuardService } from './super-route-guard.service';

describe('SuperRouteGuardService', () => {
  let service: SuperRouteGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuperRouteGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
