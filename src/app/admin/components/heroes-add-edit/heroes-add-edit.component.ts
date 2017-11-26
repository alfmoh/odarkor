import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../../../shared/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms/src/model';

@Component({
  selector: 'app-heroes-add-edit',
  templateUrl: './heroes-add-edit.component.html',
  styleUrls: ['./heroes-add-edit.component.css']
})
export class HeroesAddEditComponent implements OnInit {

heroId;
hero;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {
    this.heroId = this.route.snapshot.params['id'];
    if(this.heroId){
      this.heroService.get(this.heroId).subscribe(hero => this.hero = hero);
    }
   }

  ngOnInit() {
  }

  textBoxContentChanged(input) {
// console.log(input)
  }

}
