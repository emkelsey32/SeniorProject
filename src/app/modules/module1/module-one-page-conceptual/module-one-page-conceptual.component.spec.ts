import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOnePageConceptualComponent } from './module-one-page-conceptual.component';

describe('ModuleOnePageConceptualComponent', () => {
  let component: ModuleOnePageConceptualComponent;
  let fixture: ComponentFixture<ModuleOnePageConceptualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOnePageConceptualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOnePageConceptualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
