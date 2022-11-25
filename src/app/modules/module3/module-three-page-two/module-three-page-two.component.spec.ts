import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleThreePageTwoComponent } from './module-three-page-two.component';

describe('ModuleThreePageTwoComponent', () => {
  let component: ModuleThreePageTwoComponent;
  let fixture: ComponentFixture<ModuleThreePageTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleThreePageTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleThreePageTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
