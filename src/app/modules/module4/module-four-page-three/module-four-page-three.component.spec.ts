import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFourPageThreeComponent } from './module-four-page-three.component';

describe('ModuleFourPageThreeComponent', () => {
  let component: ModuleFourPageThreeComponent;
  let fixture: ComponentFixture<ModuleFourPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFourPageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFourPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
