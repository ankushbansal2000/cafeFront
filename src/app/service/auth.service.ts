import { AddItems } from './../model/add-items';
import { AdminLoginRegistration } from './../model/admin-login-registration';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = "http://127.0.0.1:8000";
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'})
  constructor(private httpClient: HttpClient) { }


  createUser(employee: AdminLoginRegistration) {
    return this.httpClient.post(this.baseUrl + '/admindetail/', employee, {headers : this.httpHeaders});
  }

  addItems(item: FormData) {
    return this.httpClient.post(this.baseUrl + '/router/itemdetail/', item);
  }

  getItems() {
    return this.httpClient.get<AddItems[]>(this.baseUrl + '/router/itemdetail/');
  }
  
  getItemForUpdate(id) {
    return this.httpClient.get<AddItems[]>(this.baseUrl + '/router/itemdetail/'+id +'/' , {headers : this.httpHeaders});
  }
  putItemForUpdate(id) {
    return this.httpClient.put<AddItems[]>(this.baseUrl + '/router/itemdetail/',id +'/' , {headers : this.httpHeaders});
  }

  logInAdmin(page: string, testname: string) {
    return this.httpClient.get<AdminLoginRegistration[]>(this.baseUrl + '/adminlogin/?email=' + page +"&password="+testname);
  }




}
