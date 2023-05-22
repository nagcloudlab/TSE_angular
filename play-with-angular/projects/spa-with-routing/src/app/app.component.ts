import { Component } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SPA-with-routing';
  message: string = ''
  constructor(private router: Router) { }
  ngOnInit() {
    this.router.events.subscribe({
      next: (event: any) => {
        if (event.type === 0) {
          this.message = 'Loading...';
        } else if (event.type === 15) {
          this.message = '';
        }
      }
    })
  }
}
