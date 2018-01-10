import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';

@Injectable()
export class ModeratorAuthGuardService implements CanActivate {

  constructor(
    private userService: UserService,
    private router: Router,
    private auth: AuthService) { }


    canActivate() : Observable<boolean>{
      return this.auth.appUser$.map(appUser => {
        if(appUser.isModerator) return true;
        
          this.router.navigate(["/404"]);
          return false;
      })
    }
}
