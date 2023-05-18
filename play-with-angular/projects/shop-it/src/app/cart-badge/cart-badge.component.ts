import { Component, Input } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-badge',
  templateUrl: './cart-badge.component.html',
  styleUrls: ['./cart-badge.component.css']
})
export class CartBadgeComponent {

  value: number = 0;

  constructor(
    private cartService: CartService
  ) {
  }

  ngOnInit() {
    console.log("CartBadgeComponent: ngOnInit()");
    this.cartService.$cart
      .subscribe({
        next: cart => {
          this.value = cart.length;
        }
      })
  }

}
