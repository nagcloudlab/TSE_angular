import { TestBed } from '@angular/core/testing';
import { CanActivateChildFn } from '@angular/router';

import { productViewGuard } from './product-view.guard';

describe('productViewGuard', () => {
  const executeGuard: CanActivateChildFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => productViewGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
