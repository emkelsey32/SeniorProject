import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFourPracticalComponent } from './module-four-practical.component';

describe('ModuleFourPracticalComponent', () => {
  let component: ModuleFourPracticalComponent;
  let fixture: ComponentFixture<ModuleFourPracticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFourPracticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFourPracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
