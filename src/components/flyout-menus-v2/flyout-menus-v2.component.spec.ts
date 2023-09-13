import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlyoutMenusV2Component } from './flyout-menus-v2.component';

describe('FlyoutMenusV2Component', () => {
  let component: FlyoutMenusV2Component;
  let fixture: ComponentFixture<FlyoutMenusV2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlyoutMenusV2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FlyoutMenusV2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
