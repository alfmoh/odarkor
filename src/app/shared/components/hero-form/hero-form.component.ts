import { FileTypeValidator } from '../../../others/directives/filetypevalidator.directive';
import { FileValidator } from '../../../others/directives/filevalidator.directive';
import { Router } from '@angular/router';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { UserService } from './../../services/user.service';
import { PostsService } from './../../services/posts.service';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { IMyOptions, IMyDateModel, IMyDate } from 'mydatepicker';
import { TimeOptions } from '../../../others/utilities/time-options';
import * as countries from '../../../others/utilities/countries.json';
import { SubmissionDto } from '../../models/submission';

@Component({
  selector: 'hero-form',
  templateUrl: './hero-form.component.html',
  styleUrls: ['./hero-form.component.css']
})
export class HeroFormComponent {

  form: FormGroup;
  birthDateOptions;
  deathDateOptions;
  achievementText;
  countries: any = countries;

  currentUpload: SubmissionDto;
  selectedFiles: FileList;

  constructor(
    private postsService: PostsService,
    private userService: UserService,
    private modalService: NgbModal,
    private router: Router,
    fb: FormBuilder,
    timeOptions: TimeOptions,
  ) 
    {
    this.form = fb.group({
      name: ["", Validators.required],
      country: ["", Validators.required],
      knownFor: ["", Validators.required],
      achievementDetails: [""],
      image: ["", [FileValidator.validate, FileTypeValidator.validate]],
      birthDate: [timeOptions.defaultDate, Validators.required],
      deathDate: [timeOptions.defaultDate, Validators.required]
    })

    this.birthDateOptions = timeOptions.birthDateOptions;
    this.deathDateOptions = timeOptions.deathDateOptions;
  }


  keyupHandlerFunction(input) {
    this.achievementText = input;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  upload(submission, modalBoxContent) {
    let file = submission.image[0];
    this.currentUpload = submission;
    this.postsService.pushUploadWithImgUrl(submission, modalBoxContent);
  }


  submit(input, modalBoxContent) {
    let submission = new SubmissionDto(input, this.achievementText);
    this.upload(submission, modalBoxContent);
  }

}
