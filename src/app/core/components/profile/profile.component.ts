import { Submission } from "./../../../shared/models/submission";
import { PostsService } from "./../../../shared/services/posts.service";
import { Hero } from "./../../../shared/models/hero";
import { HeroService } from "./../../../shared/services/hero.service";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit, style, trigger, state, transition, animate } from "@angular/core";
import "rxjs/add/operator/take";
import { Status } from "../../../shared/enums/status";

@Component({
  selector: "profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
  animations: [
    trigger("slideInOut",[
      state("in",style({
        transform: "translate3d(0,0,0)"
      })),
      state("out",style({
        transform: "translate3d(100%, 0, 0)"
      })),
      transition("in => out", animate("400ms ease-in-out")),
      transition("out => in", animate("400ms ease-in-out"))
    ])
  ]
})
export class ProfileComponent {
  hero: Hero;
  id;
  user;
  submission: Submission;
  _opened: boolean = false;
  toggleState = "out";

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

  toggleSidebar() {
    this.toggleState = this.toggleState === "out" ? "in" : "out";
  }
}
