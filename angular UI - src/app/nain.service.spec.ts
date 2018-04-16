import { TestBed, inject } from '@angular/core/testing';

import { NainService } from './nain.service';

describe('NainService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NainService]
    });
  });

  it('should be created', inject([NainService], (service: NainService) => {
    expect(service).toBeTruthy();
  }));
});
