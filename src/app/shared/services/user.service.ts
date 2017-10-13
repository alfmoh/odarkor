import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  constructor(
    private afAuth: AngularFireAuth
  ) { }

getUser() : Observable<firebase.User> {
  return this.afAuth.authState;
}

}
