import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolluantWidgetComponent } from './polluant-widget.component';

describe('PolluantWidgetComponent', () => {
  let component: PolluantWidgetComponent;
  let fixture: ComponentFixture<PolluantWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolluantWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolluantWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
