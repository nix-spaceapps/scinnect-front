import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScinnectorsComponent } from './scinnectors.component';

describe('ScinnectorsComponent', () => {
  let component: ScinnectorsComponent;
  let fixture: ComponentFixture<ScinnectorsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ScinnectorsComponent]
    });
    fixture = TestBed.createComponent(ScinnectorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
