import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOnePracticalComponent } from './module-one-practical.component';

describe('ModuleOnePracticalComponent', () => {
  let component: ModuleOnePracticalComponent;
  let fixture: ComponentFixture<ModuleOnePracticalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOnePracticalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOnePracticalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
