import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Module4sidenavComponent } from './module4sidenav.component';

describe('Module4sidenavComponent', () => {
  let component: Module4sidenavComponent;
  let fixture: ComponentFixture<Module4sidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Module4sidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Module4sidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
