import { AnalyticsService } from './analytics.service';
import { SubmissionDto } from "./../shared/models/submission";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "./../shared/shared.module";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NotfoundComponent } from "./components/notfound/notfound.component";
import { CloseMenuDirective } from "./directives/closemenu.directive";
import { FileValueAccessor } from "./directives/filevalueaccessor.directive";
import { FileValidator } from "./directives/filevalidator.directive";
import { FileTypeValidator } from "./directives/filetypevalidator.directive";
import { RoundPipe } from "./pipes/round.pipe";
import { CustomTitleCasePipe } from "./pipes/custom-titlecase.pipe";
import { Submission } from "../shared/models/submission";
import { UserService } from "../shared/services/user.service";
import { Hero } from "../shared/models/hero";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { NameInitialsPipe } from "./pipes/name-initials.pipe";
import { ZippyComponent } from "./components/zippy/zippy.component";

@NgModule({
  imports: [CommonModule, FormsModule],
  declarations: [
    NotfoundComponent,
    CloseMenuDirective,
    FileValueAccessor,
    FileValidator,
    FileTypeValidator,
    RoundPipe,
    CustomTitleCasePipe,
    NameInitialsPipe,
    SidebarComponent,
    ZippyComponent
  ],
  exports: [
    CloseMenuDirective,
    FileValueAccessor,
    FileValidator,
    RoundPipe,
    NameInitialsPipe,
    CustomTitleCasePipe,
    SidebarComponent,
    ZippyComponent
  ],
  providers: [Hero, SubmissionDto, Submission, UserService,AnalyticsService]
})
export class OthersModule {}
