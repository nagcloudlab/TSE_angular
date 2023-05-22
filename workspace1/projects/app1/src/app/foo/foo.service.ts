import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooService {

  constructor() {
    console.log("FooService::constructor()");
  }

  getFoo() {
    return "Foo"
  }

}
