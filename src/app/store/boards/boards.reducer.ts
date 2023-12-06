import {
  createFeatureSelector,
  createReducer,
  createSelector,
} from '@ngrx/store';
import * as data from './../../../assets/data.json';
import { Board } from './boards';

export interface State {
  boards: Board[];
}

export const initialState: State = {
  boards: data.boards,
};

export const boardsReducer = createReducer(initialState);

export const selectorBoardState = createFeatureSelector<State>('boards');

export const selectorBoardNames = createSelector(
  selectorBoardState,
  (state) => {
    return state.boards.map((board) => board.name);
  }
);
