import { User } from './../models/user';
import { UserService } from './user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import "rxjs/add/operator/switchMap";
import "rxjs/add/observable/of";

@Injectable()
export class AuthService {

user$: Observable<firebase.User>;

    constructor(private route: ActivatedRoute,
        private userService: UserService,
        private router: Router,
        private afAuth: AngularFireAuth){
            this.user$ = afAuth.authState;
        }

    login(){
        let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
        localStorage.setItem("returnUrl",returnUrl);

        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    logout(){
        this.afAuth.auth.signOut();
        this.router.navigate(["/"]);
    }

    get appUser$() : Observable<User> {
        return this.user$
            .switchMap(user => {
                if(user)
                    return this.userService.getUserById(user.uid);
                return Observable.of(null)
            })
    }
}