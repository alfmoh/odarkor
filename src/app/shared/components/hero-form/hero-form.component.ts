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
import { SubmissionDto } from "../../models/submission";
import "automapper-ts/dist/automapper";
import {} from "automapper-ts";

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

  currentUpload: SubmissionDto;
  selectedFiles: FileList;
  sources = [];

  constructor(
    private postsService: PostsService,
    private userService: UserService,
    private modalService: NgbModal,
    private router: Router,
    private submissionDto: SubmissionDto,
    fb: FormBuilder,
    timeOptions: TimeOptions
  ) {
    this.form = fb.group({
      name: ["", Validators.required],
      country: ["", Validators.required],
      knownFor: ["", Validators.required],
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
    let file = submission.image[0];
    this.currentUpload = submission;
    this.postsService.pushUploadWithImgUrl(submission, modalBoxContent);
  }

  submit(input, modalBoxContent) {
    let countryAndCode = input.country as string;
    let getCode = countryAndCode.slice(0, countryAndCode.indexOf(","));
    let getCountry = countryAndCode.substr(
      countryAndCode.indexOf(",") + 1,
      countryAndCode.length
    );
    let birthDate = !input.birthDate.formatted
      ? "01/01/1000"
      : input.birthDate.formatted;
    let deathDate = !input.deathDate.formatted
      ? "01/01/1000"
      : input.deathDate.formatted;

    automapper
      .createMap("formInput", "submissionDto")
      .forMember("country", opts => {
        return getCountry;
      })
      .forMember("code", () => {
        return getCode;
      })
      .forMember("achievementDetails", () => {
        return this.achievementText;
      })
      .forMember("birthDate", () => {
        return birthDate;
      })
      .forMember("deathDate", () => {
        return deathDate;
      })
      .forMember("sources", () => this.sources);

    this.submissionDto = automapper.map("formInput", "submissionDto", input);

    this.upload(this.submissionDto, modalBoxContent);
  }
}
