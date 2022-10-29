import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOnePageFourComponent } from './module-one-page-four.component';

describe('ModuleOnePageFourComponent', () => {
  let component: ModuleOnePageFourComponent;
  let fixture: ComponentFixture<ModuleOnePageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOnePageFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOnePageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
