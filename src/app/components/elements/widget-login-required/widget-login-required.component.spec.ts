import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetLoginRequiredComponent } from './widget-login-required.component';

describe('WidgetLoginRequiredComponent', () => {
  let component: WidgetLoginRequiredComponent;
  let fixture: ComponentFixture<WidgetLoginRequiredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetLoginRequiredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetLoginRequiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
