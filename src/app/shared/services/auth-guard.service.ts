import { AuthService } from './auth.service';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
    private auth: AuthService) { }

  canActivate(
    route, state: RouterStateSnapshot
  ){
    return this.auth.getUser().map(user => {
      if(user) return true;

      this.router.navigate(["/login"],{
        queryParams: {returnUrl: state.url}
      });
      return false;
    })
  }

}
