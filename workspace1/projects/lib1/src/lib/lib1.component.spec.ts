import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Lib1Component } from './lib1.component';

describe('Lib1Component', () => {
  let component: Lib1Component;
  let fixture: ComponentFixture<Lib1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Lib1Component]
    });
    fixture = TestBed.createComponent(Lib1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
