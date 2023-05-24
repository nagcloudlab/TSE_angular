import { Component } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { map, merge } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  subscription: Subscription | null = null;

  movieStreamData = ['john wick', 'inception', 'interstellar'];
  cartoonsStreamData = ['thunder cats', 'Dragon Ball Z', 'Ninja Turtles'];

  outputStreamData: Array<any> = [];

  ngOnInit() { }

  startStream() {

    const movieStreamSource = interval(1500); // 1.5 seconds
    const cartoonStreamSource = interval(1000); // 1s seconds

    const c = cartoonStreamSource.pipe(
      map((output) => output % this.cartoonsStreamData.length),
      map((index) => this.cartoonsStreamData[index])
    );
    this.subscription = movieStreamSource
      .pipe(
        map((output) => output % this.movieStreamData.length),
        map((index) => this.movieStreamData[index]),
        merge(c)
      )
      .subscribe((element: any) => {
        this.outputStreamData.push(element);
      });
  }

  stopStream() {
    this.subscription?.unsubscribe();
    this.subscription = null;
  }
}
