import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    // component(s)
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    ProductComponent,
    ReviewComponent
    // pipe(s)
  ],
  imports: [
    // can import other module(s)
    BrowserModule
  ],
  providers: [
    // service(s)
  ],
  bootstrap: [AppComponent] // root-component
})
export class AppModule { }
