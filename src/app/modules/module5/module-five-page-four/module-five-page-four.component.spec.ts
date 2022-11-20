import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFivePageFourComponent } from './module-five-page-four.component';

describe('ModuleFivePageFourComponent', () => {
  let component: ModuleFivePageFourComponent;
  let fixture: ComponentFixture<ModuleFivePageFourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFivePageFourComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFivePageFourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
