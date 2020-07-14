import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomDetailComponent } from './nom-detail.component';

describe('NomDetailComponent', () => {
  let component: NomDetailComponent;
  let fixture: ComponentFixture<NomDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
