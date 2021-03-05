import { TestBed } from '@angular/core/testing';

import { PineoService } from './pineo.service';

describe('PineoService', () => {
  let service: PineoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PineoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
