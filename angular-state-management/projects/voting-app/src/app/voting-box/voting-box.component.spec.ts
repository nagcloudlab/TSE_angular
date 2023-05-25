import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingBoxComponent } from './voting-box.component';

describe('VotingBoxComponent', () => {
  let component: VotingBoxComponent;
  let fixture: ComponentFixture<VotingBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingBoxComponent]
    });
    fixture = TestBed.createComponent(VotingBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
