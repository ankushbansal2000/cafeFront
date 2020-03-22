import { AdminLoginRegistration } from './../model/admin-login-registration';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  id: string = "token";
  constructor(private apiService: AuthService, private router: Router) { }
  public loginData = {} as AdminLoginRegistration;
  ngOnInit() {
  }

  onLogin(loginData: AdminLoginRegistration) {

    this.apiService.logInAdmin(loginData.email, loginData.password).subscribe(data => {
      data.forEach(function (value) {
        loginData.name = value.name;
      });
      console.log(loginData.name);
      if (!(loginData.name == "Invalid Email Or Password")) {
        console.log("if");
        sessionStorage.setItem('token', loginData.name);
        this.router.navigate(["/dashboard"]);
      } else {
        alert(loginData.name);
        console.log("if");
      }
    },
      error => {
        alert(error.error.text);
      });
  }
}
