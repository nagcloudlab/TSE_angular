import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-two',
  template: `
  <div>
    <div class="card card-body">
      Component Two

      <ul>
        <li *ngFor="let item of arr">{{item}}</li>
      </ul>

      <div class="d-flex justify-content-around">
        <app-comp-five></app-comp-five>
        <app-comp-six></app-comp-six>
      </div>

    </div>
  </div>
  
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompTwoComponent implements OnInit {

  constructor() { }

  @Input() prop = {}

  ngOnInit(): void {
  }

  arr: Array<string> = []
  ngDoCheck() {
    this.arr.push("checked")
    console.log("CompTwo :: ngDoCheck")
  }



}
