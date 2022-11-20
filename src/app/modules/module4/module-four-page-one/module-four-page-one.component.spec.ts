import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFourPageOneComponent } from './module-four-page-one.component';

describe('ModuleFourPageOneComponent', () => {
  let component: ModuleFourPageOneComponent;
  let fixture: ComponentFixture<ModuleFourPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFourPageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFourPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
