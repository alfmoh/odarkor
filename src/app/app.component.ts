import { UserService } from "./shared/services/user.service";
import { Router } from "@angular/router";
import { AuthService } from "./shared/services/auth.service";
import { Component } from "@angular/core";
import { AnalyticsService } from "./others/analytics.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(
    private analyticsService: AnalyticsService,
    private auth: AuthService,
    router: Router,
    private userService: UserService
  ) {
    userService.getUser().subscribe(user => {
      let returnUrl = localStorage.getItem("returnUrl");
      if (!returnUrl) return;

      // userService.save(user);

      localStorage.removeItem("returnUrl");
      router.navigateByUrl(returnUrl);
    });
  }

  ngOnInit() {
    this.analyticsService.pageView("/index.html");
  }
}
