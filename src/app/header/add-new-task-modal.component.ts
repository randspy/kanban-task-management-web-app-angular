import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-add-new-task-modal',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule],
  template: `
    <div>
      <h2 mat-dialog-title>Add New Task</h2>
      <mat-dialog-actions align="end">
        <button mat-button mat-dialog-close>Cancel</button>
        <button mat-button [mat-dialog-close]="true" cdkFocusInitial>
          Install
        </button>
      </mat-dialog-actions>
    </div>
  `,
  styles: ``,
})
export class AddNewTaskModalComponent {}
