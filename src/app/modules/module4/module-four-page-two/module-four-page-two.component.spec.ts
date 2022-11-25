import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFourPageTwoComponent } from './module-four-page-two.component';

describe('ModuleFourPageTwoComponent', () => {
  let component: ModuleFourPageTwoComponent;
  let fixture: ComponentFixture<ModuleFourPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFourPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFourPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
