import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFivePageThreeComponent } from './module-five-page-three.component';

describe('ModuleFivePageThreeComponent', () => {
  let component: ModuleFivePageThreeComponent;
  let fixture: ComponentFixture<ModuleFivePageThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFivePageThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFivePageThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
