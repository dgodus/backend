import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomNewComponent } from './nom-new.component';

describe('NomNewComponent', () => {
  let component: NomNewComponent;
  let fixture: ComponentFixture<NomNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
