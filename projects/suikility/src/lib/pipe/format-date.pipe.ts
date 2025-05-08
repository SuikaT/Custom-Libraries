import { Pipe, PipeTransform } from "@angular/core";
import { formatDate } from "suikility";

@Pipe({
    name: "formatDate",
})
export class FormatDatePipe implements PipeTransform {
    transform(date: Date, formatString = "dd/MM/yyyy"): string {
        return formatDate(date, formatString);
    }
}
