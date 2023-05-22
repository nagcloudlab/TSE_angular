import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { CartTableComponent } from './cart-table/cart-table.component';
import { DiscountPipe } from './discount.pipe';
import { HighlightDirective } from './highlight.directive';
import { ReviewFormComponent } from './review-form/review-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: "products"
  },
  {
    path: 'products',
    component: ProductListComponent,
  },
  {
    path: 'cart',
    component: CartTableComponent,
  }
]

@NgModule({
  declarations: [
    // component(s)
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    ReviewComponent,
    CartBadgeComponent,
    CartTableComponent,
    // pipe(s)
    DiscountPipe,
    HighlightDirective,
    ReviewFormComponent
  ],
  imports: [
    // can import other module(s)
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    // service(s)
  ],
  bootstrap: [AppComponent] // root-component
})
export class AppModule { }
