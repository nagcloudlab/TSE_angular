import { CanActivateFn } from '@angular/router';

export const newProductGuard: CanActivateFn = (route, state) => {
  console.log("newProductGuard");
  // condition to check if the user is logged in or not
  return true;
};
