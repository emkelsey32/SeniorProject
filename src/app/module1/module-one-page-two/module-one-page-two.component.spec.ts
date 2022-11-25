import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOnePageTwoComponent } from './module-one-page-two.component';

describe('ModuleOnePageTwoComponent', () => {
  let component: ModuleOnePageTwoComponent;
  let fixture: ComponentFixture<ModuleOnePageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOnePageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOnePageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
