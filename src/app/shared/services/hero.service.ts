import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';

@Injectable()
export class HeroService {

  constructor(private db: AngularFireDatabase) { }

  getAll(status) {
    return this.db.list(`/${status}`);
  }

  get(heroId,status) {
    return this.db.object(`/${status}/${heroId}/hero`);
  }

}
