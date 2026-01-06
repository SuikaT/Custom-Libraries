import { ActivatedRouteSnapshot } from "@angular/router";

export function getDeepestChild(route: ActivatedRouteSnapshot): ActivatedRouteSnapshot {
    let current = route;
    while (current.firstChild) {
        current = current.firstChild;
    }
    return current;
}
