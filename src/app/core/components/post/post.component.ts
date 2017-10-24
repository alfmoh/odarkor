import { HeroService } from './../../../shared/services/hero.service';
import { Component, OnInit } from '@angular/core';
import 'rxjs/add/operator/map';

@Component({
  selector: 'post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
  submissions$;

  constructor(private heroService: HeroService) {
    this.submissions$ = this.heroService.getAll();
  }

}
