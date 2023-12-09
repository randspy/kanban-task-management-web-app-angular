import { CommonModule } from '@angular/common';
import { Store } from '@ngrx/store';
import { ColumnComponent } from './column/column.component';
import { EmptyBoardComponent } from './empty-board.component';
import { Component } from '@angular/core';
import * as fromBoards from '../store/boards/boards.reducer';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [ColumnComponent, EmptyBoardComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss',
})
export class BoardComponent {
  public columns$ = this.store.select(fromBoards.selectorSelectedBoardColumns);

  constructor(private store: Store<fromBoards.State>) {}
}
