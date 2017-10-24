import { SubmissionDto } from './submission';

export class Hero {
    name: string;
    country: string;
    code: string;
    knownFor: string;
    achievementDetails: string;
    birthDate: string;
    deathDate: string;
    imageUrl: string;

    constructor(input: SubmissionDto) {
        this.name = input.name;
        this.country = input.country;
        this.code = input.code;
        this.knownFor = input.knownFor;
        this.birthDate = input.birthDate;
        this.deathDate = input.deathDate;
        this.achievementDetails = input.achievementDetails;
        this.imageUrl = input.imageUrl;
    }
}
