import { OrderItems, OrderData } from './../../model/add-items';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  public updateOrder = {} as OrderItems;
  public object = {} as OrderItems;
  public dummy : OrderItems[];
  public array : OrderItems[]=[];
  constructor(private apiService : AuthService) { }

  ngOnInit() {
    this.getApiForUpdate();
  }

  getApiForUpdate() {
    this.apiService.getItemForData().subscribe(data => {
      this.dummy = data;
      this.dummy.forEach(value => {
        this.object = new OrderItems;
        this.object.email = value.email;
        this.object.order = JSON.parse(value.order);
        this.array.push(this.object);
      })
    },
      error => {
        alert(error.error.text);
      });
  }


}
