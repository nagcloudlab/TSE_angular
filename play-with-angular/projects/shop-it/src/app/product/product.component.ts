import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input("value")
  product: any = {}
  currentTab: number = 1;
  reviews: Array<any> = [
    { stars: 3, comment: "good one", author: 'who-1' },
    { stars: 2, comment: "bad one", author: 'who-2' }
  ];

  handleTabChange(event: MouseEvent, tabIndex: number) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex: number): boolean {
    return this.currentTab === tabIndex;
  }

}
