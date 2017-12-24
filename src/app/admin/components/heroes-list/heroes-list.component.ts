import { Status } from './../../../shared/enums/status';
import { Subscription } from 'rxjs/Subscription';
import { Component, OnInit } from '@angular/core';
import { HeroService } from '../../../shared/services/hero.service';
import { Submission } from '../../../shared/models/submission';


@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent {

subscription: Subscription;
submissions: Submission[]

  constructor(private heroService: HeroService) {

    this.subscription = this.heroService.getAll(Status.submissions)
     .subscribe(submissions => this.submissions = submissions)

   }


}
