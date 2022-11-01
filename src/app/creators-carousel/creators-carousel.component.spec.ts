import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorsCarouselComponent } from './creators-carousel.component';

describe('CreatorsCarouselComponent', () => {
  let component: CreatorsCarouselComponent;
  let fixture: ComponentFixture<CreatorsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatorsCarouselComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatorsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
