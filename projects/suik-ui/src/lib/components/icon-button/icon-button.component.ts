import { Component } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
    selector: "suikui-icon-button",
    imports: [CommonModule, MatIconModule],
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
