import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOnePageThreeComponent } from './module-one-page-three.component';

describe('ModuleOnePageThreeComponent', () => {
  let component: ModuleOnePageThreeComponent;
  let fixture: ComponentFixture<ModuleOnePageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOnePageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOnePageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
