import { GuardGuard } from './guard/guard.guard';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', loadChildren: './layout/layout.module#LayoutModule', canActivate: [GuardGuard]
  }, 
  {
    path: 'admin-login', loadChildren: './admin-login/admin-login.module#AdminLoginModule'
  }, 
  {
    path: 'admin-registration', loadChildren: './admin-registration/admin-registration.module#AdminRegistrationModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
