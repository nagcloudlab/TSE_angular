import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent {

  productId!: number
  product: any = {}

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {

    //this.productId = this.route.snapshot.params['id'];

    this.route.params.subscribe(params => {
      this.productId = params['id'];
      this.productsService.getProduct(this.productId)
        .subscribe((product: any) => {
          this.product = product;
        });
    })

  }

  handleGoBack() {
    this.router.navigate(['/products']);
  }

}
