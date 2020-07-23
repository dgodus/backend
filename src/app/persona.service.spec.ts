import { TestBed } from '@angular/core/testing';

import { PersonaService } from './services/persona.service';

describe('NombService', () => {
  let service: PersonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
