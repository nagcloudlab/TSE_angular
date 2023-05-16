import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // element|component name
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  products: Array<any> = [
    {
      id: 1,
      name: 'laptop',
      price: 2000,
      isAvailable: false,
      description: 'laptop description',
      image: 'assets/img/Laptop.png'
    },
    {
      id: 2,
      name: 'mobile',
      price: 1000,
      isAvailable: true,
      description: 'mobile description',
      image: 'assets/img/Mobile.png'
    }
  ]
  currentTab: number = 1;

  handleTabChange(event: MouseEvent, tabIndex: number) {
    event.preventDefault();
    this.currentTab = tabIndex;
  }
  isTabSelected(tabIndex: number): boolean {
    return this.currentTab === tabIndex;
  }

}
