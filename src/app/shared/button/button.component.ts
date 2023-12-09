import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [],
  template: `
    <button
      class="text-kg-white bg-kg-purple px-4 py-2 rounded-full"
      (click)="onClicked()"
    >
      <ng-content></ng-content>
    </button>
  `,
})
export class ButtonComponent {
  @Output() clicked = new EventEmitter<void>();

  onClicked() {
    this.clicked.emit();
  }
}
