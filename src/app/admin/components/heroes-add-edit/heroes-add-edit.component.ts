import { Router, ActivatedRoute } from '@angular/router';
import { HeroService } from '../../../shared/services/hero.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Hero } from '../../../shared/models/hero';

@Component({
  selector: 'app-heroes-add-edit',
  templateUrl: './heroes-add-edit.component.html',
  styleUrls: ['./heroes-add-edit.component.css']
})
export class HeroesAddEditComponent implements OnInit {

  heroId;
  hero: Hero;
  form: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private heroService: HeroService,
    fb: FormBuilder
  ) {
    this.heroId = this.route.snapshot.params['id'];
    if (this.heroId) {
      this.heroService.get(this.heroId).subscribe(
        hero => {
          this.hero = hero;
          this.form.controls.name.setValue(this.hero.name),
            this.form.controls.country.setValue(this.hero.country)
          this.form.controls.knownFor.setValue(this.hero.knownFor)
          this.form.controls.achievementDetails.setValue(this.hero.achievementDetails)
          this.form.controls.birthDate.setValue(this.hero.birthDate)
          this.form.controls.deathDate.setValue(this.hero.deathDate)
          this.form.controls.imageUrl.setValue(this.hero.imageUrl)
        }
      );
    }
    this.form = fb.group({
      name: ["", Validators.required],
      country: ["", Validators.required],
      knownFor: ["", Validators.required],
      achievementDetails: ["", [Validators.required]],
      imageUrl: ["", [Validators.required]],
      birthDate: ["", Validators.required],
      deathDate: ["", Validators.required]
    })
  }


  ngOnInit() {
  }

  textBoxContentChanged(input) {
    // console.log(input)
  }

  submit(input) {
    console.log(input)
  }
}
