import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetPolluantComponent } from './widget-polluant.component';

describe('WidgetPolluantComponent', () => {
  let component: WidgetPolluantComponent;
  let fixture: ComponentFixture<WidgetPolluantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WidgetPolluantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetPolluantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
