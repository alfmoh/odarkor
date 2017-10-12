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
  exports: [HeroineFormComponent]
})
export class SharedModule { }
