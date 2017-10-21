import { UserService } from './../../services/user.service';
import { PostsService } from './../../services/posts.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
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
  countries: any = countries;

  constructor(private postsService: PostsService,
    private userService: UserService,
    timeOptions: TimeOptions,
    fb: FormBuilder, ) {
    this.form = fb.group({
      name: ["", Validators.required],
      country: ["", Validators.required],
      knownFor: ["", Validators.required],
      achievementDetails: [""],
      birthDate: [timeOptions.defaultDate, Validators.required],
      deathDate: [timeOptions.defaultDate, Validators.required]
    })
    this.userService.getUser().subscribe(user => this.user = user);

    this.birthDateOptions = timeOptions.birthDateOptions;
    this.deathDateOptions = timeOptions.deathDateOptions;
  }

  ngOnInit() {
  }

  get name() {
    return this.form.get("name");
  }
  get country() {
    return this.form.get("country");
  }
  get knownFor() {
    return this.form.get("knownFor");
  }

  get achievementDetails() {
    return this.form.get("achievementDetails");
  }

  get birthDate() {
    return this.form.get("birthDate");
  }
  get deathDate() {
    return this.form.get("deathDate");
  }

  keyupHandlerFunction(input) {
    this.textValue = input;
  }


  submit(input) {

    let countryAndCode = input.country as string;
    let getCode = countryAndCode.slice(0, countryAndCode.indexOf(","));
    let getCountry = countryAndCode.substr(countryAndCode.indexOf(",") + 1, countryAndCode.length);

    let formattedInput = {
      achievementDetails: this.textValue,
      dateOfBirth: (!input.birthDate.formatted) ? "01/01/1000" : input.birthDate.formatted,
      dateOfDeath: (!input.deathDate.formatted) ? "01/01/1000" : input.deathDate.formatted,
      country: getCountry,
      code: getCode,
      user: this.user.displayName,
      knownFor: input.knownFor,
      name: input.name
    }
     this.postsService.create(formattedInput);
  }

}
