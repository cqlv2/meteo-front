import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPolluantStatComponent } from './widget-polluant-stat.component';

describe('WidgetPolluantStatComponent', () => {
  let component: WidgetPolluantStatComponent;
  let fixture: ComponentFixture<WidgetPolluantStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPolluantStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPolluantStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
