import { Component, Inject } from '@angular/core';
import { CEATWheel } from './di/CEATWheel';
import { Wheel } from './di/IWheel';
import { MRFWheel } from './di/MRFWheel';

import { IAppConfig, APP_CONFIG, AppConfig } from './di/value';
import { WHEEL } from './di/WHEEL';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = '7-di-recap';
  constructor(
    @Inject(APP_CONFIG) private config: IAppConfig,
    @Inject(WHEEL) private wheel: Wheel
  ) {
    console.log(this.config);
    this.wheel.rotate()
  }

}
