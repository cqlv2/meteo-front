import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleAnswerComponent } from './module-answer.component';

describe('ModuleAnswerComponent', () => {
  let component: ModuleAnswerComponent;
  let fixture: ComponentFixture<ModuleAnswerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleAnswerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleAnswerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
