import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-three',
  template:`
  
  <div>
    <div class="card card-body">
      Component Three
      <ul>
        <li *ngFor="let item of arr">{{item}}</li>
      </ul>
    </div>
  </div>
  
  `
})
export class CompThreeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  arr: Array<string> = []
  ngDoCheck() {
    this.arr.push("checked")
    console.log("CompThree :: ngDoCheck")
  }

}
