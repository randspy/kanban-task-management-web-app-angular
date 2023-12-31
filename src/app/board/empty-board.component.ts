import { Component } from '@angular/core';

@Component({
  selector: 'app-empty-board',
  standalone: true,
  imports: [],
  template: `
    <div class="text-kg-h-l text-kg-grey-medium text-center px-4">
      This board is empty. Create a new column to get started.
    </div>
    <button
      class="bg-kg-purple text-kg-white mt-8 mx-auto py-4 px-4 rounded-full w-fit"
    >
      + Add New Column
    </button>
  `,
})
export class EmptyBoardComponent {}
