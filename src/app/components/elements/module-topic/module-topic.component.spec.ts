import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTopicComponent } from './module-topic.component';

describe('ModuleTopicComponent', () => {
  let component: ModuleTopicComponent;
  let fixture: ComponentFixture<ModuleTopicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTopicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModuleTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
