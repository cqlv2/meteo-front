import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetWeatherStatComponent } from './widget-weather-stat.component';

describe('WidgetWeatherStatComponent', () => {
  let component: WidgetWeatherStatComponent;
  let fixture: ComponentFixture<WidgetWeatherStatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetWeatherStatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetWeatherStatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
