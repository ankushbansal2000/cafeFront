import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminLoginRoutingModule } from './admin-login-routing.module';
import { AdminLoginComponent } from './admin-login.component';


@NgModule({
  declarations: [AdminLoginComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminLoginRoutingModule
  ]
})
export class AdminLoginModule { }
