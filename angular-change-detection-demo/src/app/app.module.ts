import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WhoCauseChangeComponent } from './who-cause-change/who-cause-change.component';
import { CompOneComponent } from './comp-one/comp-one.component';
import { CompTwoComponent } from './comp-two/comp-two.component';
import { CompThreeComponent } from './comp-three/comp-three.component';
import { CompFourComponent } from './comp-four/comp-four.component';
import { CompFiveComponent } from './comp-five/comp-five.component';
import { CompSixComponent } from './comp-six/comp-six.component';

import { CompRootComponent } from './comp-root/comp-root.component';
import { CartBadgeComponent } from './cart-badge/cart-badge.component';
import { ZoneComponent } from './zone/zone.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    WhoCauseChangeComponent,
    CompOneComponent,
    CompTwoComponent,
    CompThreeComponent,
    CompFourComponent,
    CompFiveComponent,
    CompSixComponent,
    CompRootComponent,
    CartBadgeComponent,
    NavbarComponent,
    ZoneComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
