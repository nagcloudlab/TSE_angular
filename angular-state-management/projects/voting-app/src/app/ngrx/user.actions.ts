
import { createAction, props } from '@ngrx/store';

export const loadUser = createAction(
    '[User] LoadUser',
    props<{ user: any }>()
);