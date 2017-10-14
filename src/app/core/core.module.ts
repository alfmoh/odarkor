import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { PostComponent } from './components/post/post.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {path: "", component: HomeComponent},
      {path: "login", component: LoginComponent}
    ])
  ],
  declarations: [HomeComponent, NavbarComponent, LoginComponent, PostComponent],
  exports:[NavbarComponent]
})
export class CoreModule { }
