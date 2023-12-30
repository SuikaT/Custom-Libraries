import { Directive, EventEmitter, HostListener, Output } from '@angular/core';

@Directive({
  selector: '[ngx-dnd]',
  standalone: true,
})
export class DndDirective {
  @Output('fileDropped')
  fileDropped = new EventEmitter<FileList>();

  constructor() {}

  @HostListener('dragover', ['$event'])
  onDragOver(dragEvent: DragEvent) {
    dragEvent.preventDefault();
    dragEvent.stopPropagation();
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(dragEvent: DragEvent) {
    dragEvent.preventDefault();
    dragEvent.stopPropagation();
  }

  @HostListener('drop', ['$event'])
  onDrop(dragEvent: DragEvent) {
    dragEvent.preventDefault();
    dragEvent.stopPropagation();
    const files = dragEvent.dataTransfer.files;
    if (files.length > 0) {
      this.fileDropped.emit(files);
    }
  }
}
