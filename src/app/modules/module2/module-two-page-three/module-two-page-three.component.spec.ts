import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTwoPageThreeComponent } from './module-two-page-three.component';

describe('ModuleTwoPageThreeComponent', () => {
  let component: ModuleTwoPageThreeComponent;
  let fixture: ComponentFixture<ModuleTwoPageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTwoPageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleTwoPageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
