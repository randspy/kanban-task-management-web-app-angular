import { CardComponent } from './card.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Column } from '../../store/boards/boards';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule, CardComponent],
  template: ` <div class="w-72 pl-4 pt-6">
    <div class="flex flex-col">
      <div class="flex items-center">
        <div class="w-3 h-3 bg-kg-purple rounded-full mr-2"></div>
        <div class="text-kg-grey-medium text-kg-h-s">
          {{ column.name }} ({{ column.tasks.length }})
        </div>
      </div>
      @for (task of column.tasks; track $index) {
      <app-card class="mt-6" [task]="task" />
      }
    </div>
  </div>`,
})
export class ColumnComponent {
  @Input({ required: true }) column!: Column;
}
