import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CEATWheel } from './di/CEATWheel';
import { MRFWheel } from './di/MRFWheel';
import { Wheel } from './di/IWheel';
import { WHEEL } from './di/WHEEL';

import { IAppConfig, APP_CONFIG, AppConfig } from './di/value';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide: APP_CONFIG,
      useValue: AppConfig
    },
    // MRFWheel,
    // CEATWheel
    {
      provide: WHEEL,
      useClass: MRFWheel
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
