import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddItemRoutingModule } from './add-item-routing.module';
import { AddItemComponent } from './add-item.component';
import { EditItemComponent } from './edit-item/edit-item.component';


@NgModule({
  declarations: [AddItemComponent, EditItemComponent],
  imports: [
    CommonModule,
    FormsModule,
    AddItemRoutingModule
  ]
})
export class AddItemModule { }
