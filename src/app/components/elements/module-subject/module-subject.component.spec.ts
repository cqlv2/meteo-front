import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleSubjectComponent } from './module-subject.component';

describe('ModuleSubjectComponent', () => {
  let component: ModuleSubjectComponent;
  let fixture: ComponentFixture<ModuleSubjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleSubjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleSubjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
