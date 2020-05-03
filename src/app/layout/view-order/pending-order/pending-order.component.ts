import { Component, OnInit } from '@angular/core';
import { OrderItems, OrderItem } from 'src/app/model/add-items';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-pending-order',
  templateUrl: './pending-order.component.html',
  styleUrls: ['./pending-order.component.css']
})
export class PendingOrderComponent implements OnInit {

  public object = {} as OrderItems;
  public objectStatus = {} as OrderItems;
  public dummy: OrderItem[];
  public array: OrderItems[] = [];
  constructor(private apiService: AuthService) { }
status: string;
  ngOnInit() {
    this.getApiForUpdate();
  }

  getApiForUpdate() {
    this.status = "pending";
    this.apiService.getItemForData(this.status).subscribe(data => {
      this.dummy = data;
      this.dummy.forEach(value => {
        this.object = new OrderItems;
        this.object.id = value.id;
        this.object.email = value.email;
        this.object.order = JSON.parse(value.order);
        this.array.push(this.object);
      })
    },
      error => {
        alert(error.error.text);
      });
  }

  onAcceptOrder(id: OrderItems) {
    this.objectStatus.status = "PROCESSING";
    this.apiService.onAcceptOrder(this.objectStatus, id).subscribe(data => {
      console.log(data);
    },
      error => {
        alert(error.error.text);
      });
  }


}
