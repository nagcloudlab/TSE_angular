import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VotingService {

  // state
  votingLines: Array<any> = []
  votingLines$ = new BehaviorSubject<Array<any>>(this.votingLines);

  // state-management
  handleVote(vote: any) {
    let { item, voteType } = vote;
    let votingLine = this.votingLines.find(votingLine => votingLine.item === item);
    if (votingLine) {
      if (voteType === 'like') {
        votingLine.likes++;
      }
      if (voteType === 'dislike') {
        votingLine.dislikes++;
      }
    } else {
      if (voteType === 'like') {
        this.votingLines.push({ item, likes: 1, dislikes: 0 });
      }
      if (voteType === 'dislike') {
        this.votingLines.push({ item, likes: 0, dislikes: 1 });
      }
    }
    this.votingLines$.next(this.votingLines);
  }

}
