import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module5sidenavComponent } from './module5sidenav.component';

describe('Module5sidenavComponent', () => {
  let component: Module5sidenavComponent;
  let fixture: ComponentFixture<Module5sidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module5sidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module5sidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
