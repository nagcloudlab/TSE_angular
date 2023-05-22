import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooHeaderComponent } from './foo-header.component';

describe('FooHeaderComponent', () => {
  let component: FooHeaderComponent;
  let fixture: ComponentFixture<FooHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooHeaderComponent]
    });
    fixture = TestBed.createComponent(FooHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
