import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { VotingService } from '../voting.service';

@Component({
  selector: 'app-voting-table',
  templateUrl: './voting-table.component.html',
  styleUrls: ['./voting-table.component.css']
})
export class VotingTableComponent {

  votingLines$!: Observable<any>

  constructor(
    // private votingService: VotingService,
    private store: Store
  ) { }

  ngOnInit() {
    this.votingLines$ = this.store.select((state: any) => state.votingLines)
  }



}
