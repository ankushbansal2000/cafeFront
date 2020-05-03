import { AuthService } from './../../../service/auth.service';
import { OrderItems, OrderItem } from './../../../model/add-items';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-accept-order',
  templateUrl: './accept-order.component.html',
  styleUrls: ['./accept-order.component.css']
})
export class AcceptOrderComponent implements OnInit {
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
    this.status = "PROCESSING";
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

  onCompleteOrder(id: OrderItems) {
    this.objectStatus.status = "COMPLETED";
    this.apiService.onAcceptOrder(this.objectStatus, id).subscribe(data => {
      console.log(data);
    },
      error => {
        alert(error.error.text);
      });
  }

}
