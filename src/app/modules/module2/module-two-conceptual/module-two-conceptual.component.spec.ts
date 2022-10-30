import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleTwoConceptualComponent } from './module-two-conceptual.component';

describe('ModuleTwoConceptualComponent', () => {
  let component: ModuleTwoConceptualComponent;
  let fixture: ComponentFixture<ModuleTwoConceptualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleTwoConceptualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleTwoConceptualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
