import { Component } from '@angular/core';
import { DndDirective } from '../../directives/dnd.directive';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'ngx-drop-area',
  standalone: true,
  imports: [DndDirective, MatIconModule],
  templateUrl: './drop-area.component.html',
  styleUrl: './drop-area.component.scss',
})
export class DropAreaComponent {
  files: any[];

  constructor() {}

  onFileDropped(event: FileList) {
    //TODO
  }
}
