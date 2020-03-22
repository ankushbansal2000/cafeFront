import { EditItemComponent } from './edit-item/edit-item.component';
import { AddItemComponent } from './add-item.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '', component: AddItemComponent
  },
  {
    path: 'editcharges/:id', component: EditItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddItemRoutingModule { }
