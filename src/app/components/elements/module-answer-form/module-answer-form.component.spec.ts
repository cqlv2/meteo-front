import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAnswerFormComponent } from './module-answer-form.component';

describe('ModuleAnswerFormComponent', () => {
  let component: ModuleAnswerFormComponent;
  let fixture: ComponentFixture<ModuleAnswerFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleAnswerFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAnswerFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
