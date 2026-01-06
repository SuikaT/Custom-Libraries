import { format } from "date-fns";

export function formatDate(date: Date, formatString: string): string {
    if (date) {
        return format(date, formatString);
    }

    return "Invalid Date";
}

export function isDate(object: Object): boolean {
    return object instanceof Date && !isNaN(object.getTime());
}
