import { Component, Input } from "@angular/core";
import { formatDate, FormatDatePipe, isDate } from "suikility";

@Component({
    selector: "ngx-custom-table",
    standalone: true,
    imports: [FormatDatePipe],
    templateUrl: "custom-table.component.html",
    styleUrl: "custom-table.component.scss",
})
export class CustomTableComponent {
    @Input()
    columnTitles = new Map<string, string>();

    @Input()
    datas: any[];

    @Input()
    displayedFields: string[];

    public isDate(date: object): boolean {
        return isDate(date);
    }
}
