import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooFooterComponent } from './foo-footer.component';

describe('FooFooterComponent', () => {
  let component: FooFooterComponent;
  let fixture: ComponentFixture<FooFooterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FooFooterComponent]
    });
    fixture = TestBed.createComponent(FooFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
