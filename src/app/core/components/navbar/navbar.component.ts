import { UserService } from '../../../shared/services/user.service';
import { AuthService } from '../../../shared/services/auth.service';
import { Observable } from 'rxjs/Rx';
import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

user$ : Observable<firebase.User>;

  constructor(private userService: UserService,
    private auth: AuthService) {
    this.user$ = userService.getUser();
   }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

}
