import {
  createFeatureSelector,
  createReducer,
  createSelector,
  on,
} from '@ngrx/store';
import * as data from './../../../assets/data.json';
import { Board } from './boards';
import { selectBoard } from './boards.actions';

export interface State {
  boards: Board[];
  selectedBoard?: Board;
}

export const initialState: State = {
  boards: data.boards,
  selectedBoard: data.boards?.[0],
};

export const boardsReducer = createReducer(
  initialState,
  on(selectBoard, (state, { payload }) => ({
    ...state,
    selectedBoard: state.boards.find((board) => board.name === payload),
  }))
);

export const selectorBoardState = createFeatureSelector<State>('boards');

export const selectorBoardNames = createSelector(
  selectorBoardState,
  (state) => {
    return state.boards.map((board) => board.name);
  }
);

export const selectorSelectedBoard = createSelector(
  selectorBoardState,
  (state) => state.selectedBoard
);

export const selectorSelectedBoardName = createSelector(
  selectorSelectedBoard,
  (board) => board?.name
);
