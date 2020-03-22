import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AdminRegistrationRoutingModule } from './admin-registration-routing.module';
import { AdminRegistrationComponent } from './admin-registration.component';


@NgModule({
  declarations: [AdminRegistrationComponent],
  imports: [
    CommonModule,
    FormsModule,
    AdminRegistrationRoutingModule
  ]
})
export class AdminRegistrationModule { }
