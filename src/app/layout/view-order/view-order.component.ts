import { OrderItems, OrderData, OrderItem } from './../../model/add-items';
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
  public dummy : OrderItem[];
  public array : OrderItems[]=[];
  public arr : OrderData[]=[];
  constructor(private apiService : AuthService) { }
  str: string;
  ngOnInit() {
    this.getApiForUpdate();
  }

  getApiForUpdate() {
    this.apiService.getItemForData().subscribe(data => {
      this.dummy = data;
      this.dummy.forEach(value => {
        this.object = new OrderItems;
        this.object.email = value.email;
        console.log(value);
        this.object.order = JSON.parse(value.order);
    //    this.object.order = JSON.parse(value.order);
       console.log(this.object)
       this.array.push(this.object);
      }) 
    console.log(this.array);
    },
      error => {
        alert(error.error.text);
      });
  }


}
