import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsermanagerComponent } from './usermanager.component';

describe('UsermanagerComponent', () => {
  let component: UsermanagerComponent;
  let fixture: ComponentFixture<UsermanagerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UsermanagerComponent]
    });
    fixture = TestBed.createComponent(UsermanagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
