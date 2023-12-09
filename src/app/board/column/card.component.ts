import { CompletedSubTasksCountPipe } from './completed-tasks.pipe';
import { Task } from './../../store/boards/boards';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CompletedSubTasksCountPipe],
  template: `
    <div class="bg-kg-grey-dark rounded-md px-4 py-6">
      <div class="text-kg-h-m text-kg-white mb-2">{{ task.title }}</div>
      <div class="text-kg-grey-medium text-kg-h-s">
        {{ task.subtasks | completedSubtasksCount }} of
        {{ task.subtasks.length }} substasks
      </div>
    </div>
  `,
})
export class CardComponent {
  @Input({ required: true }) task!: Task;
}
