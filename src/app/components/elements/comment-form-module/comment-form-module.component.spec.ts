import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentFormModuleComponent } from './comment-form-module.component';

describe('CommentFormModuleComponent', () => {
  let component: CommentFormModuleComponent;
  let fixture: ComponentFixture<CommentFormModuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommentFormModuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentFormModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
