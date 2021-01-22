import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosPollutionWidgetComponent } from './infos-pollution-widget.component';

describe('InfosPollutionWidgetComponent', () => {
  let component: InfosPollutionWidgetComponent;
  let fixture: ComponentFixture<InfosPollutionWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosPollutionWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosPollutionWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
