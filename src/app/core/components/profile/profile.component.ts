import { Hero } from './../../../shared/models/hero';
import { HeroService } from './../../../shared/services/hero.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import "rxjs/add/operator/take";

@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  hero: Hero;
  id;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService
  ) {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) this.heroService.get(this.id).take(1).subscribe(h => this.hero = h);
  }

  ngOnInit() {
  }

}
