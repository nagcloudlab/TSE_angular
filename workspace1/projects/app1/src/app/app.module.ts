import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Lib1Module } from 'projects/lib1/src/public-api';

import { AppComponent } from './app.component';
import { FooModule } from './foo/foo.module';
import { FooService } from './foo/foo.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Lib1Module,
    FooModule,
  ],
  providers: [
    // FooService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
