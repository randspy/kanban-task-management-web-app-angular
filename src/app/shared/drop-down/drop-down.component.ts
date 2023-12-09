import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [],
  template: `
    <div class="dropdown">
      <select
        class="bg-kg-grey-dark text-kg-h-l text-kg-white"
        [value]="selected"
        (change)="onChange($event)"
      >
        @for (item of items; track $index) {
        <option>{{ item }}</option>
        }
      </select>
    </div>
  `,
})
export class DropDownComponent {
  @Input() public items: string[] = [];
  @Input() public selected: string = '';
  @Output() public selectItem = new EventEmitter<string>();

  public onChange(event: Event) {
    const target = event.target as HTMLInputElement;
    this.selectItem.emit(target.value);
  }
}
