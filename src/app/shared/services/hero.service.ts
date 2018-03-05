import { AngularFireDatabase } from "angularfire2/database";
import { Injectable } from "@angular/core";

@Injectable()
export class HeroService {
  constructor(private db: AngularFireDatabase) {}

  getAll(status) {
    return this.db.list(`/${status}`);
  }

  get(heroId, status) {
    return this.db.object(`/${status}/${heroId}/hero`);
  }

  getSubmission(heroId, status) {
    return this.db.object(`/${status}/${heroId}`);
  }

  deletePostAfterStatusChanged(heroId, status) {
    return this.db.object(`/${status}/${heroId}`).remove();
  }
}
