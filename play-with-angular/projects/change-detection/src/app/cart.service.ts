import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Array<any> = []
  cart$ = new BehaviorSubject<any[]>(this.cart);

  constructor() {
    setInterval(() => {
      this.cart.push({ name: 'item' });
      this.cart$.next(this.cart);
    }, 2000);

  }



}
