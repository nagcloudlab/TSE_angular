import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // element|component name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cart: Array<any> = [];

  isCartOpen: boolean = false

  toggleCartView(event: MouseEvent) {
    event.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

  handleBuy(event: any) {
    let { name } = event
    let existingCartLine = this.cart.find(line => line.name === name);
    if (existingCartLine)
      return
    let cartLine = { ...event, qty: 1 }
    this.cart = this.cart.concat(cartLine) // immutable array
  }

}
