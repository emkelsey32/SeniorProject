import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFourConceptualComponent } from './module-four-conceptual.component';

describe('ModuleTwoConceptualComponent', () => {
  let component: ModuleFourConceptualComponent;
  let fixture: ComponentFixture<ModuleFourConceptualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFourConceptualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFourConceptualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
