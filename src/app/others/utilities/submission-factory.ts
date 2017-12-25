import { Injectable } from "@angular/core";
import { UserService } from "./../../shared/services/user.service";
import { Submission } from "../../shared/models/submission";

@Injectable()
export class SubmissionFactory {
  user;

  constructor(
    private submission: Submission,
    private userService: UserService
  ) {
    userService.getUser().subscribe(user => (this.user = user));
  }

  public formContentFormat(input) {
    let countryAndCode = input.country as string;
    let getCode = countryAndCode.slice(0, countryAndCode.indexOf(","));
    let getCountry = countryAndCode.substr(
      countryAndCode.indexOf(",") + 1,
      countryAndCode.length
    );

    let contentFormat = Object.assign({}, input, {
      birthDate: input.birthDate.formatted,
      deathDate: input.deathDate.formatted,
      country: getCountry,
      code: getCode
    });
    this.submission.hero = contentFormat;
    this.submission.submittedBy = this.user.displayName;

    return this.submission;
  }
}
