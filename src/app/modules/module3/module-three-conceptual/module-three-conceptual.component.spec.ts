import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleThreeConceptualComponent } from './module-three-conceptual.component';

describe('ModuleTwoConceptualComponent', () => {
  let component: ModuleThreeConceptualComponent;
  let fixture: ComponentFixture<ModuleThreeConceptualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleThreeConceptualComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleThreeConceptualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
