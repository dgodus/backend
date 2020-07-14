import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomEditComponent } from './nom-edit.component';

describe('NomEditComponent', () => {
  let component: NomEditComponent;
  let fixture: ComponentFixture<NomEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
