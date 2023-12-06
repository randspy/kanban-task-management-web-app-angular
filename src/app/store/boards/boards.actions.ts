import { createAction, props } from '@ngrx/store';

export const selectBoard = createAction(
  '[Boards] Select Board',
  props<{ payload: string }>()
);
