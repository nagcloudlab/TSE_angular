import { Component, Input, SimpleChange } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart-table',
  templateUrl: './cart-table.component.html',
  styleUrls: ['./cart-table.component.css']
})
export class CartTableComponent {

  cart!: Array<any>;

  time: string = new Date().toLocaleTimeString();
  intervalId: any

  constructor(private cartService: CartService) {
    console.log("CartTableComponent: constructor");
    console.log(this.cart);
    // why we need this?
    // one-time initialization for the component
  }

  ngOnChanges(changes: SimpleChange) {
    console.log("CartTableComponent: ngOnChanges");
    // console.log(changes);
    // why we need this?
    // todo any side-eefect when component receives new changes/input-properties
  }

  ngOnInit() {
    console.log("CartTableComponent: ngOnInit");
    console.log(this.cart);
    // why we need this?
    // one-time initialization for the component based on initial input properties
    this.intervalId = setInterval(() => {
      console.log("tick");
      this.time = new Date().toLocaleTimeString();
    }, 1000);
    this.cart = this.cartService.getCart();
  }

  ngOnDestroy() {
    console.log("CartTableComponent: ngOnDestroy");
    clearInterval(this.intervalId);
    // why we need this?
    // one-time destruction/clean-up for the component
  }


}
