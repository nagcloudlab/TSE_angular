import { Inject, Injectable } from '@angular/core';
import { GREETER, Greeter } from '../classes/greeter.class';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  users = [
    {
      firstName: 'Nag',
      lastName: 'N',
    },
  ];
  constructor(@Inject(GREETER) public greeter: typeof Greeter) { }

  getUser() {
    const user = this.users[Math.floor(Math.random() * this.users.length)];
    return new this.greeter(user);
  }
}
