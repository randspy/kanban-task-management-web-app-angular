import { createReducer } from '@ngrx/store';
import * as data from './../../../assets/data.json';
import { Board } from './boards';

export const initialState: Board[] = data.boards;

export const boardsReducer = createReducer(initialState);
