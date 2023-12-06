import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import * as fromBoards from '../store/boards/boards.reducer';
import { selectBoard } from './../store/boards/boards.actions';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  public boards$ = this.store.select(fromBoards.selectorBoardNames);
  public selectedBoard$ = this.store.select(
    fromBoards.selectorSelectedBoardName
  );
  constructor(private store: Store<fromBoards.State>) {}

  selectBoard(boardName: string) {
    this.store.dispatch(selectBoard({ payload: boardName }));
  }
}
