import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingItemComponent } from './voting-item.component';

describe('VotingItemComponent', () => {
  let component: VotingItemComponent;
  let fixture: ComponentFixture<VotingItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingItemComponent]
    });
    fixture = TestBed.createComponent(VotingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
