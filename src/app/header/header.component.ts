import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ButtonComponent } from './../shared/button/button.component';
import { DropDownComponent } from './../shared/drop-down/drop-down.component';
import { Store } from '@ngrx/store';
import * as fromBoards from '../store/boards/boards.reducer';
import { selectBoard } from './../store/boards/boards.actions';
import { MatDialog } from '@angular/material/dialog';
import { AddNewTaskModalComponent } from './add-new-task-modal.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent, DropDownComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  public boards$ = this.store.select(fromBoards.selectorBoardNames);
  public selectedBoard$ = this.store.select(
    fromBoards.selectorSelectedBoardName
  );
  constructor(
    private store: Store<fromBoards.State>,
    public dialog: MatDialog
  ) {}

  selectBoard(boardName: string) {
    this.store.dispatch(selectBoard({ payload: boardName }));
  }
  addNewTask() {
    const dialogRef = this.dialog.open(AddNewTaskModalComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
