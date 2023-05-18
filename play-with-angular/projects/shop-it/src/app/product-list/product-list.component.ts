import { Component, EventEmitter, Output } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  products: Array<any> = []

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productsService.getProducts()
      .subscribe((products) => {
        this.products = products
      })
  }


}
