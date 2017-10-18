import { User } from './user';
import { Hero } from "./hero";


export interface Post {
    title: string;
    date: string;
    hero: Hero;
    user: User;
}