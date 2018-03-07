import { FileTypeValidator } from "../../../others/directives/filetypevalidator.directive";
import { FileValidator } from "../../../others/directives/filevalidator.directive";
import { Router } from "@angular/router";
import { NgbModal, ModalDismissReasons } from "@ng-bootstrap/ng-bootstrap";
import { UserService } from "./../../services/user.service";
import { PostsService } from "./../../services/posts.service";
import { FormArray, FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { IMyOptions, IMyDateModel, IMyDate } from "mydatepicker";
import { TimeOptions } from "../../../others/utilities/time-options";
import * as countries from "../../../others/utilities/countries.json";
import { Submission } from "../../models/submission";
import "automapper-ts/dist/automapper";
import {} from "automapper-ts";
import { SubmissionFactory } from "../../../others/utilities/submission-factory";

@Component({
  selector: "hero-form",
  templateUrl: "./hero-form.component.html",
  styleUrls: ["./hero-form.component.css"]
})
export class HeroFormComponent {
  form: FormGroup;
  birthDateOptions;
  deathDateOptions;
  achievementText;
  countries: any = countries;
  saving = false;

  currentUpload: Submission;
  selectedFiles: FileList;
  sources = [];

  constructor(
    private postsService: PostsService,
    private userService: UserService,
    private modalService: NgbModal,
    private router: Router,
    private submission: Submission,
    private submissionFactory: SubmissionFactory,
    fb: FormBuilder,
    timeOptions: TimeOptions
  ) {
    this.form = fb.group({
      name: ["", Validators.required],
      country: ["", Validators.required],
      knownFor: ["", [Validators.required, Validators.maxLength(35)]],
      // achievementDetails: ["", [Validators.required, Validators.minLength(700)]],
      achievementDetails: ["", [Validators.required]],
      image: ["", [FileValidator.validate, FileTypeValidator.validate]],
      birthDate: [timeOptions.defaultDate, Validators.required],
      deathDate: [timeOptions.defaultDate, Validators.required]
      // sourcesAndRef: ["", [Validators.required, Validators.min(1)]]
    });

    this.birthDateOptions = timeOptions.birthDateOptions;
    this.deathDateOptions = timeOptions.deathDateOptions;
  }

  addNewSource(source) {
    if (source) this.sources.push(source);
  }

  textBoxContentChanged(input) {
    this.achievementText = input.html;
  }

  detectFiles(event) {
    this.selectedFiles = event.target.files;
  }

  upload(submission, modalBoxContent) {
    this.currentUpload = submission;
    this.postsService.pushUploadWithImgUrl(submission, modalBoxContent);
  }

  submit(input, modalBoxContent) {
    this.saving = true;
    this.submission = this.submissionFactory.formContentFormat(
      input,
      this.sources
    );

    this.upload(this.submission, modalBoxContent);
  }
}
