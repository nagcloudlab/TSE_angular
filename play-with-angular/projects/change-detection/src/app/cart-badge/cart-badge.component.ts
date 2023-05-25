import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartBadgeComponent {

  value = 0;

  constructor(
    private cartService: CartService,
    private cd: ChangeDetectorRef
  ) {

  }

  ngOnInit() {
    this.cartService.cart$.subscribe(cart => {
      this.value = cart.length;
      console.log(this.value);
      this.cd.markForCheck();
    });
  }

  ngDoCheck() {
    console.log('CartBadgeComponent - ngDoCheck');
  }

}
