import { TestBed } from '@angular/core/testing';

import { ZomatoServiceService } from './zomato-service.service';

describe('ZomatoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZomatoServiceService = TestBed.get(ZomatoServiceService);
    expect(service).toBeTruthy();
  });
});
