import { ActivatedRoute, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";
import * as firebase from 'firebase';

@Injectable()
export class AuthService {
    constructor(private route: ActivatedRoute,
        private router: Router,
        private afAuth: AngularFireAuth){}

    login(){
        let returnUrl = this.route.snapshot.queryParamMap.get("returnUrl") || "/";
        localStorage.setItem("returnUrl",returnUrl);

        this.afAuth.auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider());
    }

    logout(){
        this.afAuth.auth.signOut();
        this.router.navigate(["/"]);
    }

}