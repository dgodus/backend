import { TestBed } from '@angular/core/testing';

import { NombService } from './services/nomb.service';

describe('NombService', () => {
  let service: NombService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NombService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
