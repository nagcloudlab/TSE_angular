


import { Action, createReducer, on } from '@ngrx/store';
import * as VotingLinesActions from './voting-lines.actions';

const initialState: any[] = [];

export const votingLinesReducer = createReducer(
    initialState,
    on(VotingLinesActions.like, (state, { item }) => {
        let exitingVotingLine = state.find(votingLine => votingLine.item === item);
        if (exitingVotingLine) {
            return state.map(votingLine => {
                if (votingLine.item === item) {
                    return { ...votingLine, likes: votingLine.likes + 1 };
                }
                return votingLine;
            });
        } else {
            return [...state, { item, likes: 1, dislikes: 0 }];
        }
    }),
    on(VotingLinesActions.dislike, (state, { item }) => {
        let exitingVotingLine = state.find(votingLine => votingLine.item === item);
        if (exitingVotingLine) {
            return state.map(votingLine => {
                if (votingLine.item === item) {
                    return { ...votingLine, dislikes: votingLine.dislikes + 1 };
                }
                return votingLine;
            });
        } else {
            return [...state, { item, likes: 0, dislikes: 1 }];
        }


    })
);