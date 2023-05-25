


import { Action, createReducer, on } from '@ngrx/store';
import * as UserActions from './user.actions';

const initialState: object = {};

export const userReducer = createReducer(
    initialState,
    on(UserActions.loadUser, (state, { user }) => {
        return {
            ...user
        }
    }),
);