import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaqComponent } from './components/faq/faq.component';
import { NotfoundComponent } from './components/notfound/notfound.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: "faq", component: FaqComponent}
    ])
  ],
  declarations: [FaqComponent, NotfoundComponent]
})
export class OthersModule { }
