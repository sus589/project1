import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WashingMaschineComponent } from './washing-maschine.component';

describe('WashingMaschineComponent', () => {
  let component: WashingMaschineComponent;
  let fixture: ComponentFixture<WashingMaschineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WashingMaschineComponent]
    });
    fixture = TestBed.createComponent(WashingMaschineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
