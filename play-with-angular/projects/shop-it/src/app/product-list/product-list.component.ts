import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  @Output()
  buy = new EventEmitter<any>();

  products: Array<any> = [
    {
      id: 1,
      name: 'laptop',
      price: 2000,
      currencyCode: 'INR',
      makeDate: Date.now(),
      isAvailable: true,
      description: 'laptop description',
      image: 'assets/img/Laptop.png'
    },
    {
      id: 2,
      name: 'mobile',
      price: 1000,
      currencyCode: 'INR',
      makeDate: Date.now(),
      isAvailable: true,
      description: 'mobile description',
      image: 'assets/img/Mobile.png'
    }
  ]

  handleBuy(event: any) {
    this.buy.emit(event);
  }

}
