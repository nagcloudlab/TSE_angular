import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingTableComponent } from './voting-table.component';

describe('VotingTableComponent', () => {
  let component: VotingTableComponent;
  let fixture: ComponentFixture<VotingTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingTableComponent]
    });
    fixture = TestBed.createComponent(VotingTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
