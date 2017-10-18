import { FormsModule } from '@angular/forms';
import { SharedModule } from './../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './components/faq/faq.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { TinyMceComponent } from './utilities/components/tinymce.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path: "faq", component: FaqComponent}
    ])
  ],
  declarations: [FaqComponent, NotfoundComponent, TinyMceComponent],
  exports: [TinyMceComponent]
})
export class OthersModule { }
