import { Component } from '@angular/core';
import { FooService } from './foo/foo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // providers: [FooService]
})
export class AppComponent {
  title = 'app1';

  constructor(private fooService: FooService) { }

  ngOnInit() {
    console.log(this.fooService.getFoo());
  }

}
