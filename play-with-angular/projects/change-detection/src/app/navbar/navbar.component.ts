import { ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  constructor(
    private cd: ChangeDetectorRef
  ) { }

  v = 0;

  ngOnInit() {

    setInterval(() => {
      this.v++;
    }, 1000)

    this.cd.detach();

    setTimeout(() => {
      this.cd.reattach();
    }, 5000);
  }

  ngDoCheck() {
    console.log('NavbarComponent - ngDoCheck');
  }

}
