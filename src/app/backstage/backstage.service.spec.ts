import { TestBed } from '@angular/core/testing';

import { BackstageService } from './backstage.service';

describe('BackstageService', () => {
  let service: BackstageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BackstageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
