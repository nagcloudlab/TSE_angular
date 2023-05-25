import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadUser } from './ngrx/user.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'voting-app';

  constructor(private store: Store) { }

  ngOnInit() {
    let user = {
      name: 'John',
      age: 30
    }
    this.store.dispatch(loadUser({ user }));
  }

}
