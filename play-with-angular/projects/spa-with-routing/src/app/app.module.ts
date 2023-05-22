import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductFormComponent } from './product-form/product-form.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductTableComponent } from './product-table/product-table.component';
import { HomeComponent } from './home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ProductsResolver } from './products.resolver';
import { ReactiveFormsModule } from '@angular/forms';
import { newProductGuard } from './new-product.guard';
import { productFormCancelGuard } from './product-form-cancel.guard';
import { productViewGuard } from './product-view.guard';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'products',
    component: ProductTableComponent,
    resolve: {
      allProducts: ProductsResolver
    },
    canActivateChild: [productViewGuard],
    children: [
      {
        path: ':id',
        component: ProductViewComponent
      },
    ]
  },
  {
    path: 'products/new',
    component: ProductFormComponent,
    canActivate: [newProductGuard],
    canDeactivate: [productFormCancelGuard]
  },
  // {
  //   path: 'products/:id',
  //   component: ProductViewComponent
  // },
  {
    path: 'products/:id/edit',
    component: ProductFormComponent
  },
  { path: '**', redirectTo: '/' }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductFormComponent,
    ProductViewComponent,
    ProductTableComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      enableTracing: false
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
