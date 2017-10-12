import { PostsService } from './../../services/posts.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'heroine-form',
  templateUrl: './heroine-form.component.html',
  styleUrls: ['./heroine-form.component.css']
})
export class HeroineFormComponent implements OnInit {

form: FormGroup;

  constructor(private postsService: PostsService,
    fb: FormBuilder,) {
    this.form = fb.group({
      name: ["",Validators.required],
      country: ["", Validators.required],
      dateOfBirth: [""],
      dateOfDeath: [""],
      knownFor: ["", Validators.required],
      achievementDetails: ["", Validators.required],
    })
   }

  ngOnInit() {
  }

  get name (){
    return this.form.get("name");
  }
  get country (){
    return this.form.get("country");
  }
  get knownFor (){
    return this.form.get("knownFor");
  }
  
  get achievementDetails (){
    return this.form.get("achievementDetails");
  }

  submit(input){
    this.postsService.create(input);
  }

}
