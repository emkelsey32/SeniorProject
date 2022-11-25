import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleThreePracticalComponent } from './module-three-practical.component';

describe('ModuleThreePracticalComponent', () => {
  let component: ModuleThreePracticalComponent;
  let fixture: ComponentFixture<ModuleThreePracticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleThreePracticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleThreePracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
