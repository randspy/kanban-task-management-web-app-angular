import { Pipe, PipeTransform } from '@angular/core';
import { Subtask } from './../../../store/boards/boards';

@Pipe({
  name: 'completedSubtasksCount',
  standalone: true,
})
export class CompletedSubTasksCountPipe implements PipeTransform {
  transform(subtasks: Subtask[]): number {
    return subtasks.filter((subtask) => subtask.isCompleted).length;
  }
}
