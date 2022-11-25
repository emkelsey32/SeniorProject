import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleThreePageOneComponent } from './module-three-page-one.component';

describe('ModuleThreePageOneComponent', () => {
  let component: ModuleThreePageOneComponent;
  let fixture: ComponentFixture<ModuleThreePageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleThreePageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleThreePageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
