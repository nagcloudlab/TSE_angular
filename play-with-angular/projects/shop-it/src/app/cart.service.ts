import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Array<any> = [];
  private cartStream = new BehaviorSubject<Array<any>>(this.cart);

  constructor() { }

  addToCart(product: any) {
    let { name } = product
    let existingCartLine = this.cart.find(line => line.name === name);
    if (existingCartLine)
      return
    let cartLine = { ...product, qty: 1 }
    this.cart = this.cart.concat(cartLine) // immutable array
    this.cartStream.next(this.cart)
  }

  getCart(): Array<any> {
    return this.cart;
  }
  getCartStream(): BehaviorSubject<Array<any>> {
    return this.cartStream;
  }


}
