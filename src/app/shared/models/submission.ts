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
    

    constructor(){}
}

export class Submission {
    hero: Hero;
    dateSubmitted;
    submittedBy;

    constructor (){
        this.dateSubmitted = new Date(Date.now()).toString();
    }
}