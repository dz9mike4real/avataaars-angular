import { TestBed } from '@angular/core/testing';

import { AvataaarsAngularService } from './avataaars-angular.service';

describe('AvataaarsAngularService', () => {
  let service: AvataaarsAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AvataaarsAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
