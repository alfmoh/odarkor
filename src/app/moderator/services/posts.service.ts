import { Injectable } from "@angular/core";
import * as firebase from "firebase";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class PostsService {
  constructor(private db: AngularFireDatabase) {}

  action(submission, status) {
    return this.db.list(`/${status}`).push(submission);
  }
}
