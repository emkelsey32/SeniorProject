import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFourPageFiveComponent } from './module-four-page-five.component';

describe('ModuleFourPageFiveComponent', () => {
  let component: ModuleFourPageFiveComponent;
  let fixture: ComponentFixture<ModuleFourPageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFourPageFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFourPageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
