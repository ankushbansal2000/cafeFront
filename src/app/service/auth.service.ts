import { AddItems, OrderItems, OrderItem } from './../model/add-items';
import { AdminLoginRegistration } from './../model/admin-login-registration';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({ 'Content-type': 'application/json' })
  constructor(private httpClient: HttpClient) { }


  createUser(employee: AdminLoginRegistration) {
    return this.httpClient.post(this.baseUrl + '/admindetail/', employee, { headers: this.httpHeaders });
  }

  addItems(item: AddItems) {
    return this.httpClient.post(this.baseUrl + '/router/itemdetail/', item);
  }
  addImage(item: FormData){
    return this.httpClient.post(this.baseUrl + '/router/itemimage/', item);
  }
  getItemForUpdate(id) {
    return this.httpClient.get<AddItems>(this.baseUrl + '/router/itemdetail/' + id + '/', { headers: this.httpHeaders });
  }
  putItemForUpdate(id, data: AddItems) {
    return this.httpClient.put<AddItems[]>(this.baseUrl + '/router/itemdetail/' + id + '/', data);
  }

  logInAdmin(page: string, testname: string) {
    return this.httpClient.get<AdminLoginRegistration[]>(this.baseUrl + '/adminlogin/?email=' + page + "&password=" + testname);
  }

  getItems() {
    return this.httpClient.get<AddItems[]>(this.baseUrl + '/router/itemdetail/');
  }
  getItemForData(status : string) {
    return this.httpClient.get<OrderItem[]>(this.baseUrl + '/orderdetail/get/?status=' + status);
  }
  onAcceptOrder(data : OrderItems, id) {
    return this.httpClient.put<OrderItems[]>(this.baseUrl + '/router/updateOrderStatus/' + id  + '/', data);
  }

}
