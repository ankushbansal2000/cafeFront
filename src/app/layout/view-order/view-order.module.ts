import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ViewOrderRoutingModule } from './view-order-routing.module';
import { ViewOrderComponent } from './view-order.component';
import { PendingOrderComponent } from './pending-order/pending-order.component';
import { AcceptOrderComponent } from './accept-order/accept-order.component';


@NgModule({
  declarations: [ViewOrderComponent, PendingOrderComponent, AcceptOrderComponent],
  imports: [
    CommonModule,
    ViewOrderRoutingModule
  ]
})
export class ViewOrderModule { }
