import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleThreePageThreeComponent } from './module-three-page-three.component';

describe('ModuleTwoPageThreeComponent', () => {
  let component: ModuleThreePageThreeComponent;
  let fixture: ComponentFixture<ModuleThreePageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleThreePageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleThreePageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
