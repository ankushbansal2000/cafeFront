import { OrderItems, OrderData, OrderItem } from './../../model/add-items';
import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-order',
  templateUrl: './view-order.component.html',
  styleUrls: ['./view-order.component.css']
})
export class ViewOrderComponent implements OnInit {
  public object = {} as OrderItems;
  public dummy : OrderItem[];
  public array : OrderItems[]=[];
  constructor(private apiService : AuthService) { }
status : string;
  ngOnInit() {
   // this.getApiForUpdate();
  }




}
