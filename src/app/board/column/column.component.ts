import { CardComponent } from './card/card.component';
import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Column } from '../../store/boards/boards';

@Component({
  selector: 'app-column',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './column.component.html',
  styleUrl: './column.component.scss',
})
export class ColumnComponent {
  @Input({ required: true }) column!: Column;
}
