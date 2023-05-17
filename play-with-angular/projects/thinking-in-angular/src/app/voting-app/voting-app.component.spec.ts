import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VotingAppComponent } from './voting-app.component';

describe('VotingAppComponent', () => {
  let component: VotingAppComponent;
  let fixture: ComponentFixture<VotingAppComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VotingAppComponent]
    });
    fixture = TestBed.createComponent(VotingAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
