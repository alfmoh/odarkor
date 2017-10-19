import { UserService } from './../../services/user.service';
import { PostsService } from './../../services/posts.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import {IMyDpOptions, IMyDateModel} from 'mydatepicker';
import { TimeOptions } from '../../../others/utilities/time-options';
import * as countries from "../../../others/utilities/countries.json";

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
textValue;
countries:any = countries;

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
      birthDate: [null, Validators.required],
      deathDate: [null, Validators.required]
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

  keyupHandlerFunction(input){
    this.textValue = input;
  }

  submit(input){
    let formattedInput = {
      achievementDetails: this.textValue,
      dateOfBirth: input.birthDate.formatted,
      dateOfDeath : input.deathDate.formatted,
      country: input.country,
      user : this.user.displayName,
      knownFor: input.knownFor,
      name: input.name
    }
    this.postsService.create(formattedInput);
  }
  
}
