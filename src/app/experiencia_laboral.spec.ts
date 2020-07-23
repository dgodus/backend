import { TestBed } from '@angular/core/testing';

import { Experiencia_laboralService } from './services/experiencia_laboral.service';

describe('NombService', () => {
  let service: Experiencia_laboralService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Experiencia_laboralService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
