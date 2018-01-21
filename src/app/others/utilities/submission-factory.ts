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

  retriveCountryAndCode(input: any) {
    let countryAndCode = input.country as string;
    let code = countryAndCode.slice(0, countryAndCode.indexOf(","));
    let country = countryAndCode.substr(
      countryAndCode.indexOf(",") + 1,
      countryAndCode.length
    );
    return { country, code };
  }

  retriveBirthDeathDate(input: any) {
    let birthDate = !input.birthDate.formatted
      ? "01/01/1000"
      : input.birthDate.formatted;
    let deathDate = !input.deathDate.formatted
      ? "01/01/1000"
      : input.deathDate.formatted;
    return { birthDate, deathDate };
  }

  public formContentFormat(input, sources) {
    let { country, code } = this.retriveCountryAndCode(input);
    let { birthDate, deathDate } = this.retriveBirthDeathDate(input);

    let hero = Object.assign({}, input, {
      birthDate,
      deathDate,
      country,
      code
    });
    if (input.image) this.submission.image = input.image;
    this.submission.sources = sources;
    this.submission.hero = hero;
    this.submission.submittedBy = this.user.displayName;

    return this.submission;
  }
}
