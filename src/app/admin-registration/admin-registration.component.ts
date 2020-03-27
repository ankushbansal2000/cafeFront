import { AdminLoginRegistration } from './../model/admin-login-registration';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-registration',
  templateUrl: './admin-registration.component.html',
  styleUrls: ['./admin-registration.component.css']
})
export class AdminRegistrationComponent implements OnInit {
  public newRegistration = {} as AdminLoginRegistration;
  constructor(private apiService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  onSubmit(newRegistration: AdminLoginRegistration) {
    this.apiService.createUser(newRegistration).subscribe(data => {
      alert('You Successfully registered.');
      this.router.navigate(['/admin-login']);
    },
      error => {
        alert(error.error.text);
      });
  }



}
