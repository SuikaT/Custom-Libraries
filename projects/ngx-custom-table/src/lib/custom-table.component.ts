import { Component, Input } from "@angular/core";

@Component({
  selector: "ngx-custom-table",
  standalone: true,
  imports: [],
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
}
