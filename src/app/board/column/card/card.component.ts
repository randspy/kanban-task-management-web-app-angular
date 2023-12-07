import { CompletedSubTasksCountPipe } from './completed-tasks.pipe';
import { Task } from './../../../store/boards/boards';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CompletedSubTasksCountPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent {
  @Input({ required: true }) task!: Task;
}
