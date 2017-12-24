import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { User } from '../../../shared/models/user';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

user$ : Observable<firebase.User>;
appUser$: Observable<User>;

  constructor(private userService: UserService,
    private auth: AuthService) {
    this.user$ = userService.getUser();
    this.appUser$ = auth.appUser$;
   }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}
