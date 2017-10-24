import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor(private db: AngularFireDatabase) { }

  getAll() {
    return this.db.list("/submissions");
  }

  get(heroId) {
    return this.db.object("/submissions/" + heroId + "/hero");
  }

}
