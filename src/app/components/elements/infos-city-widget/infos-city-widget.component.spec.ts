import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfosCityWidgetComponent } from './infos-city-widget.component';

describe('InfosCityWidgetComponent', () => {
  let component: InfosCityWidgetComponent;
  let fixture: ComponentFixture<InfosCityWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfosCityWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfosCityWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
