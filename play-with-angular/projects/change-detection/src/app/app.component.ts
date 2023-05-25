import { Component, NgZone } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  myName = 'John Doe';
  timeNow = new Date();
  todos = []
  progressCount = 0;

  constructor(private zone: NgZone) { }

  ngDoCheck() {
    console.log('AppComponent - ngDoCheck');
  }

  startProgress() {
    this.zone.runOutsideAngular(() => {
      this.progressCount = 0;
      let interval = setInterval(() => {
        if (this.progressCount % 10 === 0)
          this.zone.run(() => { });
        console.log(this.progressCount);
        if (this.progressCount < 100)
          this.progressCount++;
        else {
          this.zone.run(() => { });
          clearInterval(interval);
        }
      }, 100);
    })
  }

  ngOnInit() {
    // setInterval(() => {
    //   this.timeNow = new Date();
    // }, 1000);
  }

  changeName() {
    this.myName = 'Nag N';
  }
  getTodos() {
    fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        this.todos = todos;
      })
  }


}
