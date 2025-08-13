import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { MatIcon } from "@angular/material/icon";
import { MatIconButton } from "@angular/material/button";

@Component({
    selector: "suikui-icon-button",
    imports: [CommonModule, MatIcon, MatIconButton],
    templateUrl: "./icon-button.component.html",
    styleUrl: "./icon-button.component.scss",
    standalone: true,
})
export class IconButtonComponent {
    @Input()
    disabled = false;

    onClick(event: MouseEvent): void {
        if (this.disabled) {
            event.stopPropagation();
        }
    }
}
