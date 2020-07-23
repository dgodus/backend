import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperiencialaboralNewComponent } from './experiencialaboral-new.component';

describe('ExperiencialaboralNewComponent', () => {
  let component: ExperiencialaboralNewComponent;
  let fixture: ComponentFixture<ExperiencialaboralNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperiencialaboralNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperiencialaboralNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
