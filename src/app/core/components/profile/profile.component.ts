import { Submission } from "./../../../shared/models/submission";
import { PostsService } from "./../../../shared/services/posts.service";
import { Hero } from "./../../../shared/models/hero";
import { HeroService } from "./../../../shared/services/hero.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import "rxjs/add/operator/take";
import { Status } from "../../../shared/enums/status";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent {
  hero: Hero;
  id;
  user;
  submission: Submission;
  _opened: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService,
    private postService: PostsService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id)
      this.heroService
        .get(this.id, Status.approved)
        .take(1)
        .subscribe(hero => (this.hero = hero));
    if (this.id)
      this.heroService
        .getSubmission(this.id, Status.approved)
        .take(1)
        .subscribe(submission => (this.submission = submission));
    this.user = postService.getSubmittedByUser(this.id);
  }

  private _toggleOpened(): void {
    this._opened = !this._opened;
  }
}
