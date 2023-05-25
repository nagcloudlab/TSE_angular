import { createAction, props } from '@ngrx/store';

export const like = createAction(
    '[Voting] Like',
    props<{ item: string }>()
);

export const dislike = createAction(
    '[Voting] Dislike',
    props<{ item: string }>()
);