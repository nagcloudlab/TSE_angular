import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cart: Array<any> = [];
  public $cart = new BehaviorSubject<Array<any>>(this.cart);

  constructor() { }

  addToCart(product: any) {
    let { name } = product
    let existingCartLine = this.cart.find(line => line.name === name);
    if (existingCartLine)
      return
    let cartLine = { ...product, qty: 1 }
    this.cart = this.cart.concat(cartLine) // immutable array
    this.$cart.next(this.cart)
  }





}
