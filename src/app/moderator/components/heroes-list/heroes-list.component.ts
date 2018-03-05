import { Status } from "./../../../shared/enums/status";
import { Subscription } from "rxjs/Subscription";
import { Component, OnInit } from "@angular/core";
import { HeroService } from "../../../shared/services/hero.service";
import { Submission } from "../../../shared/models/submission";

@Component({
  selector: "app-heroes-list",
  templateUrl: "./heroes-list.component.html",
  styleUrls: ["./heroes-list.component.css"]
})
export class HeroesListComponent {
  subscription: Subscription;
  submissions: Submission[];
  selected = "submissions";

  constructor(private heroService: HeroService) {
    this.unapproved();
  }

  unapproved() {
    this.subscription = this.heroService
      .getAll(Status.unapproved)
      .subscribe(submissions => (this.submissions = submissions));
    this.selected = Status.unapproved;
  }

  approved() {
    this.subscription = this.heroService
      .getAll(Status.approved)
      .subscribe(approved => (this.submissions = approved));
    this.selected = Status.approved;
  }

  rejected() {
    this.subscription = this.heroService
      .getAll(Status.rejected)
      .subscribe(approved => (this.submissions = approved));
    this.selected = Status.rejected;
  }
}
