import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOnePageOneComponent } from './module-one-page-one.component';

describe('ModuleOnePageOneComponent', () => {
  let component: ModuleOnePageOneComponent;
  let fixture: ComponentFixture<ModuleOnePageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOnePageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOnePageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
