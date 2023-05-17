import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-voting-table',
  templateUrl: './voting-table.component.html',
  styleUrls: ['./voting-table.component.css']
})
export class VotingTableComponent {

  @Input("value")
  votingLines: Array<any> = [];

}
