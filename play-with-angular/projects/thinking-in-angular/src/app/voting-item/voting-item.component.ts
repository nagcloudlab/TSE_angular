import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-voting-item',
  templateUrl: './voting-item.component.html',
  styleUrls: ['./voting-item.component.css']
})
export class VotingItemComponent {

  @Input()
  value!: string
  @Output()
  vote: EventEmitter<object> = new EventEmitter<object>();

  handleLike(event: MouseEvent) {
    this.vote.emit({ item: this.value, like: true });
  }
  handleDislike(event: MouseEvent) {
    this.vote.emit({ item: this.value, dislike: true });
  }

}
