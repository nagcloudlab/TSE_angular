import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    // component(s)
    AppComponent
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
