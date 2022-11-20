import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFourPageFourComponent } from './module-four-page-four.component';

describe('ModuleFourPageFourComponent', () => {
  let component: ModuleFourPageFourComponent;
  let fixture: ComponentFixture<ModuleFourPageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFourPageFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFourPageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
