import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOneConceptualComponent } from './module-one-conceptual.component';

describe('ModuleOneConceptualComponent', () => {
  let component: ModuleOneConceptualComponent;
  let fixture: ComponentFixture<ModuleOneConceptualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOneConceptualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOneConceptualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
