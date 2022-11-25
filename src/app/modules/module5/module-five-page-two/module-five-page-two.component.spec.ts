import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFivePageTwoComponent } from './module-five-page-two.component';

describe('ModuleFivePageTwoComponent', () => {
  let component: ModuleFivePageTwoComponent;
  let fixture: ComponentFixture<ModuleFivePageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFivePageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFivePageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
