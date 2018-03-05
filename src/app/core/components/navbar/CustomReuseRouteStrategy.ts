import {
  ActivatedRouteSnapshot,
  DetachedRouteHandle,
  RouteReuseStrategy
} from "@angular/router";

export class CustomRouteReuseStrategy implements RouteReuseStrategy {
  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  store(
    route: ActivatedRouteSnapshot,
    detachedTree: DetachedRouteHandle
  ): void {}
  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    return false;
  }
  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    return null;
  }
  shouldReuseRoute(
    future: ActivatedRouteSnapshot,
    curr: ActivatedRouteSnapshot
  ): boolean {
    return curr.routeConfig === null && future.routeConfig === null;
  }
}
