import { Status } from './../../../shared/enums/status';
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

    alerts = [
    {
      id: 2,
      type: "info"
    }
  ];

  constructor(private heroService: HeroService) {
    this.submissions$ = this.heroService.getAll(Status.approved);
  }

  public closeAlert(alert: any) {
    const index: number = this.alerts.indexOf(alert);
    this.alerts.splice(index, 1);
  }

}
