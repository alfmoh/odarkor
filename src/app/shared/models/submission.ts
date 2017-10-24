import { Hero } from './hero';

export class SubmissionDto {
    name: string;
    country: string;
    code: string;
    knownFor: string;
    achievementDetails: string;
    birthDate:string;
    deathDate: string;
    image: FileList;
    progress:number;
    imageUrl: string;

    constructor(
        input,achievementDetails
    ){
        let countryAndCode = input.country as string;
        let getCode = countryAndCode.slice(0, countryAndCode.indexOf(","));
        let getCountry = countryAndCode.substr(countryAndCode.indexOf(",") + 1, countryAndCode.length);
        this.name = input.name;
        this.country = getCountry;
        this.knownFor = input.knownFor;
        this.code = getCode;
        this.birthDate = (!input.birthDate.formatted) ? "01/01/1000" : input.birthDate.formatted;
        this.deathDate = (!input.deathDate.formatted) ? "01/01/1000" : input.deathDate.formatted;
        this.achievementDetails = achievementDetails;
        this.image = input.image;
    }
}

export class Submission {
    hero: Hero;
    dateSubmitted;
    submittedBy;

    constructor (input : SubmissionDto){
        this.hero = new Hero(input);
        this.dateSubmitted = new Date(Date.now()).toString();
    }
}