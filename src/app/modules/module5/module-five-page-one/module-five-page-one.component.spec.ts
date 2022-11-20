import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFivePageOneComponent } from './module-five-page-one.component';

describe('ModuleFivePageOneComponent', () => {
  let component: ModuleFivePageOneComponent;
  let fixture: ComponentFixture<ModuleFivePageOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFivePageOneComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFivePageOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
