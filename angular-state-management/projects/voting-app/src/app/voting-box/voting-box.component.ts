import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-voting-box',
  templateUrl: './voting-box.component.html',
  styleUrls: ['./voting-box.component.css']
})
export class VotingBoxComponent {

  user$!: Observable<any>
  votingLinesCount$!: Observable<any>

  constructor(private store: Store) { }

  ngOnInit() {
    this.user$ = this.store.select((state: any) => state.user);
    this.votingLinesCount$ =
      this.store.select((state: any) => state.votingLines || [])
        .pipe(map((votingLines: any) => votingLines.length));
  }

}
