import { Subscription } from 'rxjs/Subscription';
import { Hero } from './../../../shared/models/hero';
import { Component, OnInit } from '@angular/core';
import { DataTableResource } from "angular-4-data-table-bootstrap-4";
import { HeroService } from '../../../shared/services/hero.service';
import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/pairwise";
import { Submission } from '../../../shared/models/submission';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './heroes-list.component.html',
  styleUrls: ['./heroes-list.component.css']
})
export class HeroesListComponent implements OnInit {

heroes: Hero[];
filteredHeroes: any[];
subscription: Subscription;
tableResource: DataTableResource<Hero>;
items: Hero[] = [];
itemCount: number;

  constructor(private heroService: HeroService) {
   
     this.subscription = this.heroService.getAll()
     .flatMap(h=>h)
     .map(hero => (hero as Submission).hero)
     .pairwise()
      .subscribe(heroes => {
        this.filteredHeroes = this.heroes = heroes;

        this.initializeTable(heroes);
      })

   }


   private initializeTable(heroes: Hero[]) {
     this.tableResource = new DataTableResource(heroes);
     this.tableResource.query({offset: 0})
        .then(items => this.items = items);

        this.tableResource.count()
          .then(count => this.itemCount = count);
   }

   reloadItems(params){
     if(!this.tableResource) return;

     this.tableResource.query(params)
      .then(items => this.items = items)
   }

   filter(query: string){

    this.filteredHeroes = (query) ?
    this.heroes.filter(p=> p.name.toLowerCase().includes(query.toLowerCase())) :
    this.heroes;

    this.initializeTable(this.filteredHeroes);
}


  ngOnInit() {
  }

}
