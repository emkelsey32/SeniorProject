import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module2sidenavComponent } from './module2sidenav.component';

describe('Module2sidenavComponent', () => {
  let component: Module2sidenavComponent;
  let fixture: ComponentFixture<Module2sidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module2sidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module2sidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
