import { User } from './../models/user';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from "firebase";

@Injectable()
export class UserService {

  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }

getUser() : Observable<firebase.User> {
  return this.afAuth.authState;
}

save(user: firebase.User){
  this.db.object("/users/" + user.uid).update({
    name: user.displayName,
    email: user.email
  })
}

getUserById(uid: string) : FirebaseObjectObservable<User> {
  return this.db.object("/users/" + uid);
}

}
