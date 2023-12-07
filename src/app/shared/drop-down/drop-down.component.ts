import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drop-down',
  standalone: true,
  imports: [],
  templateUrl: './drop-down.component.html',
  styleUrl: './drop-down.component.scss',
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
