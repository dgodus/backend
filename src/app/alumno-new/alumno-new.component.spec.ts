import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoNewComponent } from './alumno-new.component';

describe('AlumnoNewComponent', () => {
  let component: AlumnoNewComponent;
  let fixture: ComponentFixture<AlumnoNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlumnoNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlumnoNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
