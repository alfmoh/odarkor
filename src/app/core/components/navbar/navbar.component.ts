import {
  Router,
  ActivatedRoute,
  ParamMap,
  RoutesRecognized,
  NavigationStart,
  NavigationEnd
} from "@angular/router";
import { Status } from "./../../../shared/enums/status";
import { HeroService } from "./../../../shared/services/hero.service";
import { UserService } from "../../../shared/services/user.service";
import { AuthService } from "../../../shared/services/auth.service";
import { Observable } from "rxjs/Rx";
import { Component, OnInit } from "@angular/core";
import * as firebase from "firebase";
import { User } from "../../../shared/models/user";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/take";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
  heroes = [];
  user$: Observable<firebase.User>;
  appUser$: Observable<User>;
  loggedInUser;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private heroService: HeroService,
    private userService: UserService,
    private auth: AuthService
  ) {
    this.user$ = userService.getUser();
    userService.getUser()
      .subscribe(user => {
        if(user) this.loggedInUser = userService.getUserById(user.uid)
      })
    this.appUser$ = auth.appUser$;
    this.heroService.getAll(Status.approved).subscribe(heroes => {
      heroes.forEach(hero => {
        // console.log(hero)
        return this.heroes.push(hero);
      });
    });
  }

  ngOnInit() {}

  logout() {
    this.auth.logout();
  }

  submit(input) {
    let hero = input.value.hero;
    if (hero) this.router.navigate(["profile", hero.$key]);
  }

  formatter = (x: any) => x.hero.name;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .map(
        term =>
          term === ""
            ? []
            : this.heroes
                .filter(
                  v =>
                    v.hero.name.toLowerCase().indexOf(term.toLowerCase()) > -1
                )
                .slice(0, 10)
      );
}
