import { TestBed } from '@angular/core/testing';

import { ShowApiService } from './show-api.service';

describe('ShowApiServiceService', () => {
  let service: ShowApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShowApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
