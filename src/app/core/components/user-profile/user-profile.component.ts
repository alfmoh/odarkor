import { Status } from "./../../../shared/enums/status";
import { HeroService } from "./../../../shared/services/hero.service";
import { Component, OnInit } from "@angular/core";
import { UserService } from "../../../shared/services/user.service";
import { Observable } from "rxjs/Observable";
import { Submission } from "../../../shared/models/submission";
import "rxjs/add/operator/debounceTime";

@Component({
  selector: "user-profile",
  templateUrl: "./user-profile.component.html",
  styleUrls: ["./user-profile.component.css"]
})
export class UserProfileComponent implements OnInit {
  user$: Observable<firebase.User>;
  submittedHeroes = [];
  userId;
  status = "approved";

  constructor(
    private heroService: HeroService,
    private userService: UserService
  ) {
    this.user$ = userService.getUser();
  }

  ngOnInit() {
    this.user$.subscribe(a => {
      this.userId = a.uid;
    });
    this.changed(Status.approved);
  }

  changed(status: Status) {
    this.status = status;
    this.heroService
      .getAll(status)
      .debounceTime(10)
      .subscribe(<Array>(heroes) => {
        this.submittedHeroes = [];
        heroes.forEach((hero: Submission) => {
          if (
            // hero.submittedByUserId != null && (Debounce added. Maybe not needed.)
            hero.submittedByUserId == this.userId
          ) {
            this.submittedHeroes.push(hero.hero);
          }
        });
      });
  }
}
