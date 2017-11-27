import { OthersModule } from './../others/others.module';
import { TimeOptions } from './../others/utilities/time-options';
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
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { MyDatePickerModule } from 'mydatepicker';
import { SanitizeHtmlPipe } from './pipes/sanitizehtml.pipe';
import { Submission } from './models/submission';
import { SubmissionDto } from './models/submission';
import { Hero } from './models/hero';
import { QuillModule } from 'ngx-quill';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    OthersModule,
    NgbModule.forRoot(),
    MyDatePickerModule,
    QuillModule,
    RouterModule.forChild([
      { path: "article-form", component: HeroFormComponent, canActivate: [AuthGuardService] }
    ])
  ],
  declarations: [
    HeroFormComponent,
    SanitizeHtmlPipe
  ],
  providers: [
    { provide: ErrorHandler, useClass: AppErrorHandler },
    PostsService,
    AuthService,
    AuthGuardService,
    HeroService,
    TimeOptions,
    SubmissionDto,
    Submission,
    Hero,
    UserService],
  exports: [
    HeroFormComponent,
    NgbModule.forRoot().ngModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    QuillModule,
    MyDatePickerModule,
    SanitizeHtmlPipe]
})
export class SharedModule { }
