import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubjectFormModuleComponent } from './subject-form-module.component';

describe('SubjectFormModuleComponent', () => {
  let component: SubjectFormModuleComponent;
  let fixture: ComponentFixture<SubjectFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubjectFormModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubjectFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
