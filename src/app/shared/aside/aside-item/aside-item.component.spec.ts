import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideItemComponent } from './aside-item.component';

describe('AsideItemComponent', () => {
  let component: AsideItemComponent;
  let fixture: ComponentFixture<AsideItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideItemComponent]
    });
    fixture = TestBed.createComponent(AsideItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
