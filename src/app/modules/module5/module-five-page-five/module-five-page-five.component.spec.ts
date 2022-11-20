import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFivePageFiveComponent } from './module-five-page-five.component';

describe('ModuleFivePageFiveComponent', () => {
  let component: ModuleFivePageFiveComponent;
  let fixture: ComponentFixture<ModuleFivePageFiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFivePageFiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFivePageFiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
