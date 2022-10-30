import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTwoPageTwoComponent } from './module-two-page-two.component';

describe('ModuleTwoPageTwoComponent', () => {
  let component: ModuleTwoPageTwoComponent;
  let fixture: ComponentFixture<ModuleTwoPageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTwoPageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleTwoPageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
