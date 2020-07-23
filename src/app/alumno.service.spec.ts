import { TestBed } from '@angular/core/testing';

import { AlumnoService } from './services/alumno.service';

describe('NombService', () => {
  let service: AlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
