import { BoardComponent } from './board/board.component';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { HeaderComponent } from './header/header.component';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    HeaderComponent,
    SidePanelComponent,
    BoardComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'kanban-board';
}
