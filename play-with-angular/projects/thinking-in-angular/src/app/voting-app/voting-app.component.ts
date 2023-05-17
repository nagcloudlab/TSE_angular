import { Component } from '@angular/core';

@Component({
  selector: 'app-voting-app',
  templateUrl: './voting-app.component.html',
  styleUrls: ['./voting-app.component.css']
})
export class VotingAppComponent {

  votingItems = [
    "Foo",
    "Bar"
  ]
  votingLines: Array<any> = []

  handleVote(voteEvent: any) {
    let { item, like, dislike } = voteEvent
    let existingVotingLine = this.votingLines.find(line => line.item === item)
    if (existingVotingLine) {
      if (like)
        existingVotingLine.likes++
      else
        existingVotingLine.dislikes++
    } else {
      this.votingLines.push({
        item,
        likes: like ? 1 : 0,
        dislikes: dislike ? 1 : 0
      })
    }
  }

}
