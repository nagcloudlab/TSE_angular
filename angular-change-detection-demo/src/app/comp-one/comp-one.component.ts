import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  template: `
  
  <div>

    <div class="card card-body">
      
    Component One

      <ul>
        <li *ngFor="let item of arr">{{item}}</li>
      </ul>
    
      <div class="d-flex justify-content-around">
        <app-comp-three></app-comp-three>
        <app-comp-four></app-comp-four>
      </div>

    </div>

  </div>
  
  `
})
export class CompOneComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  arr: Array<string> = []
  ngDoCheck() {
    this.arr.push("checked")
    console.log("CompOne :: ngDoCheck")
  }

}
