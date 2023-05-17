import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input("value")
  product: any = {}

  currentTab: number = 1;
  reviews: Array<any> = [
    { stars: 3, comment: "good one", author: 'who-1' },
    { stars: 2, comment: "bad one", author: 'who-2' }
  ];

  constructor(
    private cartService: CartService
  ) { }

  handleTabChange(event: MouseEvent, tabIndex: number) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  handleBuy(event: MouseEvent) {
    this.cartService.addToCart(this.product);
  }
  isTabSelected(tabIndex: number): boolean {
    return this.currentTab === tabIndex;
  }

}
