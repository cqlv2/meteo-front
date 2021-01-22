import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleCommentComponent } from './module-comment.component';

describe('ModuleCommentComponent', () => {
  let component: ModuleCommentComponent;
  let fixture: ComponentFixture<ModuleCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
