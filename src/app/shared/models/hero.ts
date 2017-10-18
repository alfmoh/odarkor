import { Achievement } from './achievement';

export interface Hero {
    name: string;
    country: string;
    dateOfBirth: string;
    dateOfDeath: string;
    knownFor: string;
    // acheivementDetails: Achievement
    achievementDetails: string;
    user : any;

}
