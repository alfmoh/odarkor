import { User } from './../models/user';
import { FirebaseObjectObservable, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as firebase from "firebase";

@Injectable()
export class UserService {
id;
  constructor(
    private db: AngularFireDatabase,
    private afAuth: AngularFireAuth
  ) { }

getUser() : Observable<firebase.User> {
  return this.afAuth.authState;
}

save(user: firebase.User, name=""){
  let username = user.displayName ? user.displayName : name;
  this.db.object("/users/" + user.uid).update({
    name: username,
    email: user.email
  })
}

getAllUsers() : FirebaseObjectObservable<User> {
  return this.db.object("/users/");
}

getUserById(uid: string) : FirebaseObjectObservable<User> {
  return this.db.object("/users/" + uid);
}

makeModerator(email): any{
  this.getAllUsers() 
    .subscribe((user: any) => {
      return (Object.keys(user)).forEach(userId => {
        if(typeof user === 'object' &&  user[userId]){
          if((user[userId].email) === email){
            this.id = userId;
            return userId;
          }
        }
        if(this.id) {
          this.getUserById(this.id)
            .subscribe(user=> {
              if(!user.isModerator) {
                console.log(user);
                this.getUserById(this.id).update({
                  isModerator : true
                })
                window.location.reload();
              }
            });
        }
      })
    })
}

unmakeModerator(email): any{
  let sub;
  this.getAllUsers() 
    .subscribe((user: any) => {
      return (Object.keys(user)).forEach(userId => {
        // console.log(userId, user)
        if(typeof user === 'object' &&  user[userId]){
          if((user[userId].email) === email){
            this.id = userId;
            return userId;
          }
        }
        if(this.id) {
          this.getUserById(this.id)
            .subscribe(user=> {
              if(user.isModerator) {
                console.log(user);
                // this.getUserById(this.id).update({
                //   isModerator : false
                // })
              }
              // window.location.reload();
            });
        }
      })
    })
    // TODO: Implemente 'make/unmake moderator' properly
}

}
