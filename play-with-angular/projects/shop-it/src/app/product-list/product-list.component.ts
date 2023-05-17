import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Array<any> = [
    {
      id: 1,
      name: 'laptop',
      price: 2000,
      isAvailable: false,
      description: 'laptop description',
      image: 'assets/img/Laptop.png'
    },
    {
      id: 2,
      name: 'mobile',
      price: 1000,
      isAvailable: true,
      description: 'mobile description',
      image: 'assets/img/Mobile.png'
    }
  ]


}
