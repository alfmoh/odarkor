import { Router } from '@angular/router';
import { AuthService } from './shared/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private auth: AuthService,
    router: Router
  ){
    auth.getUser().subscribe(user => {
      let returnUrl = localStorage.getItem("returnUrl");
      if(!returnUrl) return;

      localStorage.removeItem("returnUrl");
      router.navigateByUrl(returnUrl);
    })
  }
}
