import { Injectable } from '@angular/core';
import * as firebase from "firebase";
import { AngularFireDatabase } from "angularfire2/database";

@Injectable()
export class PostsService {

  constructor(
    private db: AngularFireDatabase
  ) { }

  approve(submission){
    return this.db.list("/approved").push(submission);
  }

}
