import { Component } from "@angular/core";
import { DndDirective } from "../../directives/dnd.directive";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "ngx-drop-area",
    imports: [DndDirective, MatIconModule],
    templateUrl: "./drop-area.component.html",
    styleUrl: "./drop-area.component.scss",
    standalone: true,
})
export class DropAreaComponent {
    files: any[];

    constructor() {}

    onFileDropped(event: FileList) {
        //TODO
    }
}
