import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  productForm!: FormGroup;
  productId!: number;
  product: any = {}

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
    });
    this.route.params.subscribe(params => {
      this.productId = params['id'];
      if (this.productId) {
        this.productsService.getProduct(this.productId).subscribe(product => {
          this.product = product;
          this.productForm.patchValue({
            name: product.name,
            price: product.price,
            description: product.description
          });
        });
      }
    })
  }

  handleSubmit(event: SubmitEvent) {
    event.preventDefault();
    if (this.productId) {
      this.productsService.updateProduct(this.productId, { ...this.product, ...this.productForm.value }).subscribe(() => {
        this.router.navigate(['/products']);
      });
    } else {
      this.productsService.createProduct({ ...this.productForm.value }).subscribe(() => {
        this.router.navigate(['/products']);
      });
    }
  }

}
