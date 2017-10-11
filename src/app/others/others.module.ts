import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "faq", component: FaqComponent}
    ])
  ],
  declarations: [FaqComponent]
})
export class OthersModule { }
