import { PostsService } from './services/posts.service';
import { AppErrorHandler } from './error/app-error-handler';
import { ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HeroineFormComponent } from './components/heroine-form/heroine-form.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {path: "heroine-form", component: HeroineFormComponent}
    ])
  ],
  declarations: [
    HeroineFormComponent
  ],
  providers: [{provide: ErrorHandler, useClass: AppErrorHandler}, PostsService],
  exports: [HeroineFormComponent]
})
export class SharedModule { }
