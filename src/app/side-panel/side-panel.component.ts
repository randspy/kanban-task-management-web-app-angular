import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromBoards from '../store/boards/boards.reducer';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-side-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './side-panel.component.html',
  styleUrl: './side-panel.component.scss',
})
export class SidePanelComponent {
  public boards$ = this.store.select(fromBoards.selectorBoardNames);
  constructor(private store: Store<fromBoards.State>) {}
}
