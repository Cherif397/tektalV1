import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageNutritionComponent } from './landing-page-nutrition.component';

describe('LandingPageNutritionComponent', () => {
  let component: LandingPageNutritionComponent;
  let fixture: ComponentFixture<LandingPageNutritionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageNutritionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageNutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
