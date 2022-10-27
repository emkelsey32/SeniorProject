import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOnePageFiveComponent } from './module-one-page-five.component';

describe('ModuleOnePageFiveComponent', () => {
  let component: ModuleOnePageFiveComponent;
  let fixture: ComponentFixture<ModuleOnePageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOnePageFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOnePageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
