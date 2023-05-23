import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeloitteCardComponent } from './deloitte-card.component';

describe('DeloitteCardComponent', () => {
  let component: DeloitteCardComponent;
  let fixture: ComponentFixture<DeloitteCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeloitteCardComponent]
    });
    fixture = TestBed.createComponent(DeloitteCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
