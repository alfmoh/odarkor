import { User } from './user';
import { Heroine } from "./heroine";


export interface Post {
    title: string;
    date: string;
    hero: Heroine;
    user: User;
}