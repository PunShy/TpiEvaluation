import { TestBed } from '@angular/core/testing';

import { OlService } from './ol.service';

describe('OlService', () => {
  let service: OlService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OlService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
