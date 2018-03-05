import { PostsService } from "./services/posts.service";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HeroService } from "./../shared/services/hero.service";
import { AuthGuardService } from "../shared/services/auth-guard.service";
import { HeroesListComponent } from "./components/heroes-list/heroes-list.component";
import { RouterModule } from "@angular/router";
import { AuthService } from "../shared/services/auth.service";
import { UserService } from "./../shared/services/user.service";
import { ModeratorAuthGuardService } from "./services/moderator-auth-guard.service";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeroesAddEditComponent } from "./components/heroes-add-edit/heroes-add-edit.component";
import { SharedModule } from "../shared/shared.module";
import { Submission } from "../shared/models/submission";
import { SubmissionFactory } from "../others/utilities/submission-factory";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([
      {
        path: "heroes/submissions",
        component: HeroesListComponent,
        canActivate: [AuthGuardService, ModeratorAuthGuardService]
      },
      {
        path: "heroes/submissions/add-edit/:status/:id",
        component: HeroesAddEditComponent,
        canActivate: [AuthGuardService, ModeratorAuthGuardService]
      }
    ])
  ],
  declarations: [HeroesListComponent, HeroesAddEditComponent],
  providers: [
    ModeratorAuthGuardService,
    AuthService,
    PostsService,
    SubmissionFactory
  ]
})
export class ModeratorModule {}
