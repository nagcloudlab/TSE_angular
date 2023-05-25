import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BoxComponent {

  @Input("value") myName!: string;

  ngDoCheck() {
    console.log('BoxComponent - ngDoCheck');
  }

}
