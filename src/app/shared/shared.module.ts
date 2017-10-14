import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HeroService } from './services/hero.service';
import { UserService } from './services/user.service';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { PostsService } from './services/posts.service';
import { AppErrorHandler } from './error/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroineFormComponent } from './components/heroine-form/heroine-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    NgbModule.forRoot(),
    RouterModule.forChild([
      {path: "heroine-form", component: HeroineFormComponent, canActivate: [AuthGuardService]}
    ])
  ],
  declarations: [
    HeroineFormComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: AppErrorHandler}, 
    PostsService,
    AuthService, 
    AuthGuardService,
    HeroService,
    UserService],
  exports: [
    HeroineFormComponent, 
    NgbModule.forRoot().ngModule,
    AngularFireDatabaseModule, AngularFireAuthModule]
})
export class SharedModule { }
