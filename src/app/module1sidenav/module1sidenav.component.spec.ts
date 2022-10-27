import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module1sidenavComponent } from './module1sidenav.component';

describe('Module1sidenavComponent', () => {
  let component: Module1sidenavComponent;
  let fixture: ComponentFixture<Module1sidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module1sidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module1sidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
