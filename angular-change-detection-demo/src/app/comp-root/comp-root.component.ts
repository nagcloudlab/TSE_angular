import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-comp-root',
  templateUrl: './comp-root.component.html',
  styleUrls: ['./comp-root.component.css']
})
export class CompRootComponent {

  property = {} // state

  toggleClass = "";

  addItemStream: Subject<any> = new Subject();

  buy(): void {
    this.addItemStream.next({})
  }

  triggerChange() {
    this.property = {}
  }

  arr: Array<string> = []
  ngDoCheck() {
    this.arr.push("checked")
    console.log("CompRoot :: ngDoCheck");
  }



}
