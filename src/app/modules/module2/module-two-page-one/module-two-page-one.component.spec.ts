import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTwoPageOneComponent } from './module-two-page-one.component';

describe('ModuleTwoPageOneComponent', () => {
  let component: ModuleTwoPageOneComponent;
  let fixture: ComponentFixture<ModuleTwoPageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTwoPageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleTwoPageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
