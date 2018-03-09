import { HeroFormComponent } from "./../components/hero-form/hero-form.component";
import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";

@Injectable()
export class PreventUnsavedChanges implements CanDeactivate<HeroFormComponent> {
  canDeactivate(component: HeroFormComponent) {
    if (
      component.form.dirty &&
      !component.saving &&
      component.form.controls.achievementDetails.value
    ) {
      return confirm(
        "Are you sure you want to continue? Any unsaved changes will be lost"
      );
    }
    return true;
  }
}
