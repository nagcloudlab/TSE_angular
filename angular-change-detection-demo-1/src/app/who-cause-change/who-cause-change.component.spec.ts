import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhoCauseChangeComponent } from './who-cause-change.component';

describe('WhoCauseChangeComponent', () => {
  let component: WhoCauseChangeComponent;
  let fixture: ComponentFixture<WhoCauseChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhoCauseChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhoCauseChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
