import { SubmissionDto } from './../shared/models/submission';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './components/faq/faq.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TinyMceComponent } from './utilities/components/tinymce.component';
import { CloseMenuDirective } from './directives/closemenu.directive';
import { FileValueAccessor } from './directives/filevalueaccessor.directive';
import { FileValidator } from './directives/filevalidator.directive';
import { FileTypeValidator } from './directives/filetypevalidator.directive';
import { RoundPipe } from './pipes/round.pipe';
import { CustomTitleCasePipe } from './pipes/custom-titlecase.pipe';
import { Submission } from '../shared/models/submission';
import { UserService } from '../shared/services/user.service';
import { Hero } from '../shared/models/hero';
import { SidebarComponent } from './components/sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: "faq", component: FaqComponent }
    ])
  ],
  declarations: [
    FaqComponent,
    NotfoundComponent,
    TinyMceComponent,
    CloseMenuDirective,
    FileValueAccessor,
    FileValidator,
    FileTypeValidator,
    RoundPipe,
    CustomTitleCasePipe,
    SidebarComponent],
  exports: [
    TinyMceComponent, 
    CloseMenuDirective, 
    FileValueAccessor,
    FileValidator,
    RoundPipe,
    CustomTitleCasePipe,SidebarComponent],
    providers: [Hero, SubmissionDto,Submission, UserService]
})
export class OthersModule { }
