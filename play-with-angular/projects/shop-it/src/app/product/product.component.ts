import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../cart.service';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input("value")
  product: any = {}

  highlightColor = "#DEF"

  currentTab: number = 1;
  reviews: Array<any> = [];

  constructor(
    private cartService: CartService,
    private productsService: ProductsService
  ) { }

  handleTabChange(event: MouseEvent, tabIndex: number) {
    event.preventDefault();
    this.currentTab = tabIndex;
    if (this.currentTab === 3) {
      this.productsService.getReviews(this.product.id).subscribe({
        next: reviews => {
          this.reviews = reviews;
        }
      })
    }
  }
  handleBuy(event: MouseEvent) {
    this.cartService.addToCart(this.product);
  }
  handleNewReview(review: any) {
    this.productsService.postNewReview(this.product.id, review)
      .subscribe({
        next: review => {
          debugger;
          this.reviews.push(review);
        }
      })
  }
  isTabSelected(tabIndex: number): boolean {
    return this.currentTab === tabIndex;
  }

}
