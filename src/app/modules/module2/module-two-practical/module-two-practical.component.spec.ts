import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTwoPracticalComponent } from './module-two-practical.component';

describe('ModuleTwoPracticalComponent', () => {
  let component: ModuleTwoPracticalComponent;
  let fixture: ComponentFixture<ModuleTwoPracticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTwoPracticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleTwoPracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
