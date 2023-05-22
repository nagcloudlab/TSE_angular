import { Component } from '@angular/core';
import { FooService } from './foo.service';

@Component({
  selector: 'app-foo',
  templateUrl: './foo.component.html',
  styleUrls: ['./foo.component.css'],
  // providers: [FooService]
})
export class FooComponent {

  constructor(private fooService: FooService) { }

  ngOnInit() {
    console.log(this.fooService.getFoo());
  }

}
