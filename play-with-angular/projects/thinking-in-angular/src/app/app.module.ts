import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VotingAppComponent } from './voting-app/voting-app.component';
import { VotingItemComponent } from './voting-item/voting-item.component';
import { VotingTableComponent } from './voting-table/voting-table.component';

@NgModule({
  declarations: [
    AppComponent,
    VotingAppComponent,
    VotingItemComponent,
    VotingTableComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
