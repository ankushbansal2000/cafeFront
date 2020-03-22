import { SidebarComponent } from './../sidebar/sidebar.component';
import { HeaderComponent } from './../header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';


@NgModule({
  declarations: [LayoutComponent,    HeaderComponent,
    SidebarComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule

  ]
})
export class LayoutModule { }
