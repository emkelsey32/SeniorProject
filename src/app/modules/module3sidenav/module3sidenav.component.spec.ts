import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module3sidenavComponent } from './module3sidenav.component';

describe('Module3sidenavComponent', () => {
  let component: Module3sidenavComponent;
  let fixture: ComponentFixture<Module3sidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module3sidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module3sidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
