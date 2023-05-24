import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRootComponent } from './comp-root.component';

describe('CompRootComponent', () => {
  let component: CompRootComponent;
  let fixture: ComponentFixture<CompRootComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompRootComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
