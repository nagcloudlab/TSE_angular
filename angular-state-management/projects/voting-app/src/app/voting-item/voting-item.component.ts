import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { VotingService } from '../voting.service';

import * as VotingLinesActions from '../ngrx/voting-lines.actions';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-voting-item',
  templateUrl: './voting-item.component.html',
  styleUrls: ['./voting-item.component.css']
})
export class VotingItemComponent {

  @Input()
  item: string = '';

  votes$!: Observable<any>

  constructor(
    // private votingService: VotingService,
    private store: Store
  ) { }

  ngOnInit() {
    this.votes$ = this.store
      .select((state: any) => state.votingLines)
      .pipe(map((votingLines: any[]) => votingLines.find(votingLine => votingLine.item === this.item)))
      .pipe(map((votingLine: any) => votingLine || { item: this.item, likes: 0, dislikes: 0 }))
      .pipe(map((votingLine: any) => votingLine.likes + (-votingLine.dislikes)))
  }

  // @Output()
  // vote: EventEmitter<any> = new EventEmitter<any>();

  handleLike(event: MouseEvent) {
    // this.vote.emit({ item: this.item, voteType: 'like' });
    //this.votingService.handleVote({ item: this.item, voteType: 'like' });
    this.store.dispatch(VotingLinesActions.like({ item: this.item }));
  }
  handleDislike(event: MouseEvent) {
    // this.vote.emit({ item: this.item, voteType: 'dislike' });
    // this.votingService.handleVote({ item: this.item, voteType: 'dislike' });
    this.store.dispatch(VotingLinesActions.dislike({ item: this.item }));
  }


}
