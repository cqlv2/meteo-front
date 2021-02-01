import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetChartsComponent } from './widget-charts.component';

describe('WidgetChartsComponent', () => {
  let component: WidgetChartsComponent;
  let fixture: ComponentFixture<WidgetChartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetChartsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetChartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
