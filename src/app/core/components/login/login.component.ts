import { AuthService } from "./../../../shared/services/auth.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private auth: AuthService) {}

  ngOnInit() {}

  login() {
    this.auth.login();
  }

  loginEmail(input) {
    this.auth.emailLogin(input.signInEmail, input.signInPassword);
  }

  regEmail(input) {
    this.auth.registerUser(
      input.registerEmail,
      input.registerPassword,
      input.username
    );
  }
}

//TOD0: Needs refactoring 
// (input should be linked to User Class)
