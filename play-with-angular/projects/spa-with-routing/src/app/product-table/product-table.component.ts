import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css']
})
export class ProductTableComponent {

  products: Array<any> = []

  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit() {

    // this.productsService.getProducts().subscribe({
    //   next: (products) => {
    //     this.products = products;
    //   }
    // })

    this.route.data.subscribe((data: any) => {
      this.products = data.allProducts;
    })

  }

}
