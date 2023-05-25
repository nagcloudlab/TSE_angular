import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.css'],
})
export class GreetingComponent {

  @Input("value") name!: string;

  ngDoCheck() {
    console.log('GreetingComponent - ngDoCheck');
  }

}
