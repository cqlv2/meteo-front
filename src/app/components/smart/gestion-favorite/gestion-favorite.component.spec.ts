import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionFavoriteComponent } from './gestion-favorite.component';

describe('GestionFavoriteComponent', () => {
  let component: GestionFavoriteComponent;
  let fixture: ComponentFixture<GestionFavoriteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionFavoriteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
