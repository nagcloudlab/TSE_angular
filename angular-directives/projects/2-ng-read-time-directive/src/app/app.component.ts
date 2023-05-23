import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  readTime!: string;

  configuration = {
    wordsPerMinute: 100
  }

  onReadTimeCalculated(readTimeStr: string) {
    this.readTime = readTimeStr;
  }

}
