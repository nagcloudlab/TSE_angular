import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // element|component name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isCartOpen: boolean = false

  toggleCartView(event: MouseEvent) {
    event.preventDefault();
    this.isCartOpen = !this.isCartOpen;
  }

}
