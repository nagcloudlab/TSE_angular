import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
  
  <div>
   <hr/>
    Welcome : guest | user
    <ul>
      <li *ngFor="let item of arr">{{item}}</li>
    </ul>
   <hr/>
  </div>
  
  `
})
export class NavbarComponent implements OnInit {

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.cd.detach()

    setTimeout(() => {
      this.cd.reattach()
    }, 5000)

  }


  arr: Array<string> = []
  ngDoCheck() {
    this.arr.push("checked")
    console.log("CompFive :: ngDoCheck")
  }

}
