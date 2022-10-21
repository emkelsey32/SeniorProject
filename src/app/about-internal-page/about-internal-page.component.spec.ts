import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutInternalPageComponent } from './about-internal-page.component';

describe('AboutInternalPageComponent', () => {
  let component: AboutInternalPageComponent;
  let fixture: ComponentFixture<AboutInternalPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutInternalPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutInternalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
