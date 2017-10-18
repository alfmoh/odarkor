import { UserService } from './../../services/user.service';
import { PostsService } from './../../services/posts.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { TimeOptions } from '../../../others/utilities/time-options';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent implements OnInit {

form: FormGroup;
user;
birthDateOptions;
deathDateOptions;

  constructor(private postsService: PostsService,
    private userService: UserService,
    timeOptions: TimeOptions,
    fb: FormBuilder,) {
    this.form = fb.group({
      name: ["",Validators.required],
      country: ["", Validators.required],
      dateOfBirth: [""],
      dateOfDeath: [""],
      knownFor: ["", Validators.required],
      achievementDetails: ["", Validators.required],
      datePicker: [null, Validators.required]
    })
    this.userService.getUser().subscribe(user=>this.user = user);

    this.birthDateOptions = timeOptions.birthDateOptions;
    this.deathDateOptions = timeOptions.deathDateOptions;
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
    input.user = this.user.displayName;
    this.postsService.create(input);
  }

}
