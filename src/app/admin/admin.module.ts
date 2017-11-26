import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeroService } from './../shared/services/hero.service';
import { AuthGuardService } from '../shared/services/auth-guard.service';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { RouterModule } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';
import { UserService } from './../shared/services/user.service';
import { AdminAuthGuardService } from './services/admin-auth-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesAddEditComponent } from './components/heroes-add-edit/heroes-add-edit.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: "admin/heroes", component: HeroesListComponent, canActivate: [AuthGuardService,AdminAuthGuardService]},
      {path: "admin/heroes/add-edit/:id", component: HeroesAddEditComponent, canActivate: [AuthGuardService,AdminAuthGuardService]}
    ])
  ],
  declarations: [HeroesListComponent, HeroesAddEditComponent],
  providers: [AdminAuthGuardService, UserService, AuthService]
})
export class AdminModule { }
