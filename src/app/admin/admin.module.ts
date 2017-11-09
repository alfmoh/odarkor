import { AuthGuardService } from '../shared/services/auth-guard.service';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from './../shared/services/user.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "admin/heroes", component: HeroesListComponent, canActivate: [AuthGuardService,AdminAuthGuardService]}
    ])
  ],
  declarations: [HeroesListComponent],
  providers: [AdminAuthGuardService, UserService, AuthService]
})
export class AdminModule { }
