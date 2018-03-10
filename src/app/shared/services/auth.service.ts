import { User } from "./../models/user";
import { UserService } from "./user.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Injectable } from "@angular/core";
import { AngularFireAuth, AngularFireAuthProvider } from "angularfire2/auth";
import * as firebase from "firebase";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";
import { AlertifyService } from "./Alertify.service";

@Injectable()
export class AuthService {
  user$: Observable<firebase.User>;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router,
    private alertify: AlertifyService,
    private afAuth: AngularFireAuth
  ) {
    this.user$ = afAuth.authState;
  }

  login() {
    let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
    localStorage.setItem("returnUrl", returnUrl);

    this.afAuth.auth
      .signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .catch(error => this.handleError(error));
  }

  registerUser(email, password, username) {
    return this.afAuth.auth
      .createUserWithEmailAndPassword(email, password)
      .then(user => {
          this.alertify.success("User Registered!")
        this.userService.save(user, username);
      })
      .catch(error => this.handleError(error));
  }

  emailLogin(email: string, password: string) {
    return this.afAuth.auth
      .signInWithEmailAndPassword(email, password)
      .then(user => {
        this.alertify.success("Logged In");
        let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
        localStorage.setItem("returnUrl", returnUrl);
      })
      .catch(error => this.handleError(error));
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(["/"]);
  }

  get appUser$(): Observable<User> {
    return this.user$.switchMap(user => {
      if (user) return this.userService.getUserById(user.uid);
      return Observable.of(null);
    });
  }

  private handleError(error: Error) {
    this.alertify.error(error.message);
  }
}
