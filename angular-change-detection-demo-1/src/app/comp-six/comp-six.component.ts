import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-six',
  template: `
  
  <div>
    <div class="card card-body">
      Component Six
      <ul>
        <li *ngFor="let item of arr">{{item}}</li>
      </ul>
      <div class="d-flex">
        <button (click)="triggerChange()" class="btn btn-sm btn-dark">trigger change</button>
      </div>
    </div>
  </div>
  
  `
})
export class CompSixComponent implements OnInit {

  property = {}

  constructor() { }

  ngOnInit(): void {
  }

  triggerChange() {
    this.property = {}
  }

  arr: Array<string> = []
  ngDoCheck() {
    this.arr.push("checked")
    console.log("CompSix :: ngDoCheck")
  }

}
