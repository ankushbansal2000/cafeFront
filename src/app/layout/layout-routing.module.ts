import { LayoutComponent } from './layout.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '' , component: LayoutComponent,
  children: [ 
    {path: "dashboard", loadChildren: "./dashboard/dashboard.module#DashboardModule"},
    {path: "addItem", loadChildren: "./add-item/add-item.module#AddItemModule"},
    {path: "viewOrder", loadChildren: "./view-order/view-order.module#ViewOrderModule"}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
 