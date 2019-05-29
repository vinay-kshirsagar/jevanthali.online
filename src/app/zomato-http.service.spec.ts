import { TestBed } from '@angular/core/testing';

import { ZomatoHttpService } from './zomato-http.service';

describe('ZomatoHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZomatoHttpService = TestBed.get(ZomatoHttpService);
    expect(service).toBeTruthy();
  });
});
