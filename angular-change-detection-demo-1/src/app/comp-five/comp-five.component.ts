import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-five',
  template: `
  
  <div>
    <div class="card card-body">
      Component Five
      <ul>
        <li *ngFor="let item of arr">{{item}}</li>
      </ul>
    </div>
  </div>
  
  `
})
export class CompFiveComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  arr: Array<string> = []
  ngDoCheck() {
    this.arr.push("checked")
    console.log("CompFive :: ngDoCheck")
  }

}
