import { CanActivateChildFn } from '@angular/router';

export const productViewGuard: CanActivateChildFn = (childRoute, state) => {
  console.log("productViewGuard");
  return confirm("Are you sure you want to view this product?")
};
