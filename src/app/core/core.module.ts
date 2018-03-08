import { AboutComponent } from "./components/about/about.component";
import { OthersModule } from "./../others/others.module";
import { SharedModule } from "./../shared/shared.module";
import { RouterModule, RouteReuseStrategy } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HomeComponent } from "./components/home/home.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { LoginComponent } from "./components/login/login.component";
import { PostComponent } from "./components/post/post.component";
import { ProfileComponent } from "./components/profile/profile.component";
import { AuthGuardService } from "../shared/services/auth-guard.service";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { UserProfileComponent } from "./components/user-profile/user-profile.component";
import { FormsModule } from "@angular/forms";
import { CustomRouteReuseStrategy } from "./components/navbar/CustomReuseRouteStrategy";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    OthersModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forChild([
      { path: "", component: HomeComponent },
      { path: "login", component: LoginComponent },
      { path: "profile/:id", component: ProfileComponent },
      { path: "about", component: AboutComponent },
      {
        path: "user-profile",
        component: UserProfileComponent,
        canActivate: [AuthGuardService]
      }
    ])
  ],
  declarations: [
    HomeComponent,
    NavbarComponent,
    LoginComponent,
    PostComponent,
    ProfileComponent,
    UserProfileComponent,
    AboutComponent,
    FooterComponent
  ],
  exports: [NavbarComponent],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: CustomRouteReuseStrategy
    }
  ]
})
export class CoreModule {}
