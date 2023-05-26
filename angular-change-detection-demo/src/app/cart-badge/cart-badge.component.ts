import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart-badge',
  template: `
  <div>
    <div class="card card-body">
      Cart Badge 

      <ul>
        <li *ngFor="let item of arr">{{item}}</li>
      </ul>

       cart count : {{count}}

    </div>
  </div>
  
  `,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CartBadgeComponent implements OnInit {

  @Input()
  addItemStream!: Observable<any>;

  count = 0;

  constructor(private cd: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.addItemStream.subscribe(() => {
      console.log("cart-badge comp reacting buy event")
      this.count++; // application state changed
      this.cd.markForCheck();
    })
  }

  arr: Array<string> = []
  ngDoCheck() {
    this.arr.push("checked")
  }


}
