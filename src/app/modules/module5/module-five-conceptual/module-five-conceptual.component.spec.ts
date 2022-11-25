import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleFiveConceptualComponent } from './module-five-conceptual.component';

describe('ModuleTwoConceptualComponent', () => {
  let component: ModuleFiveConceptualComponent;
  let fixture: ComponentFixture<ModuleFiveConceptualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleFiveConceptualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleFiveConceptualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
