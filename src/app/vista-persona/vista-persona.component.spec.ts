import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaPersonaComponent } from './vista-persona.component';

describe('VistaPersonaComponent', () => {
  let component: VistaPersonaComponent;
  let fixture: ComponentFixture<VistaPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
