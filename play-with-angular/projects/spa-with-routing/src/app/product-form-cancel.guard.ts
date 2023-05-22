import { CanDeactivateFn } from '@angular/router';
import { ProductFormComponent } from './product-form/product-form.component';

export const productFormCancelGuard: CanDeactivateFn<ProductFormComponent> = (component, currentRoute, currentState, nextState) => {
  if (component.productForm.dirty) {
    return confirm("Are you sure you want to cancel your changes?");
  }
  return true;
};
