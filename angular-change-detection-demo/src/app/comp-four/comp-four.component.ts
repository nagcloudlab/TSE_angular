import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-four',
  template:`
  
  <div>
    <div class="card card-body">
      Component Four
      <ul>
        <li *ngFor="let item of arr">{{item}}</li>
      </ul>
    </div>
  </div>
  
  `
})
export class CompFourComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }


  arr: Array<string> = []
  ngDoCheck() {
    this.arr.push("checked")
    console.log("CompFour :: ngDoCheck")
  }

}
