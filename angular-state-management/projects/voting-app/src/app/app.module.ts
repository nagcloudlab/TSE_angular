import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VotingBoxComponent } from './voting-box/voting-box.component';
import { VotingItemComponent } from './voting-item/voting-item.component';
import { VotingTableComponent } from './voting-table/voting-table.component';
import { StoreModule } from '@ngrx/store';

import { votingLinesReducer } from './ngrx/voting-lines.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { userReducer } from './ngrx/user.reducers';

@NgModule({
  declarations: [
    AppComponent,
    VotingBoxComponent,
    VotingItemComponent,
    VotingTableComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      votingLines: votingLinesReducer,
      user: userReducer
    }, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
